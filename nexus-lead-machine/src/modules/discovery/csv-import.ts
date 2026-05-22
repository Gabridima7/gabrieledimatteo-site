import { readFileSync } from 'fs'
import { extname } from 'path'
import { parse } from 'csv-parse/sync'
import * as XLSX from 'xlsx'
import { Lead } from '../../types'

// Mappatura colonne — supporta il formato del file prospecting_leads_italia
// e varianti generiche italiane/inglesi
const COLUMN_ALIASES: Record<keyof CSVRow, string[]> = {
  name:       ['nome attività', 'nome_attività', 'nome attivita', 'nome', 'ragione sociale', 'ragione_sociale', 'azienda', 'company', 'denominazione'],
  sector:     ['categoria', 'settore', 'attività', 'attivita', 'tipo', 'sector', 'category'],
  city:       ['città', 'citta', 'comune', 'city', 'localita', 'località'],
  address:    ['indirizzo', 'address', 'via', 'sede'],
  phone:      ['telefono', 'tel', 'phone', 'cellulare', 'mobile'],
  email:      ['email', 'e-mail', 'mail', 'posta'],
  rating:     ['rating', 'voto', 'stelle'],
  reviews:    ['n° recensioni', 'n. recensioni', 'recensioni', 'reviews', 'num recensioni'],
  maps_url:   ['google maps', 'maps', 'link maps', 'google_maps'],
  contacted:  ['contattato?', 'contattato', 'contacted', 'già contattato'],
  status:     ['stato', 'status'],
  vat:        ['partita_iva', 'p.iva', 'piva', 'vat', 'codice_fiscale'],
}

interface CSVRow {
  name: string
  sector?: string
  city?: string
  address?: string
  phone?: string
  email?: string
  rating?: string
  reviews?: string
  maps_url?: string
  contacted?: string
  status?: string
  vat?: string
}

export interface CSVImportOptions {
  campaignId: string
  filter: {
    geo?: string        // es. "Torino", "Sicilia" — matcha su città estratta
    sectors?: string[]  // es. ["ristorante", "bar caffetteria"]
  }
  maxLeads?: number
  offset?: number       // paginazione: salta le prime N righe già processate
  skipContacted?: boolean  // salta le righe con "Contattato?" = sì (default: true)
}

export async function importFromFile(
  filePath: string,
  options: CSVImportOptions
): Promise<Omit<Lead, 'id' | 'created_at' | 'updated_at'>[]> {
  const ext = extname(filePath).toLowerCase()

  let rows: Record<string, string>[]
  if (ext === '.csv') {
    rows = parseCSV(filePath)
  } else if (ext === '.xlsx' || ext === '.xls') {
    rows = parseExcel(filePath)
  } else {
    throw new Error(`Formato non supportato: ${ext}. Usa .csv, .xlsx o .xls`)
  }

  console.log(`   File caricato: ${rows.length.toLocaleString('it')} righe totali`)

  const normalized = rows.map(normalizeRow)
  const filtered = applyFilters(normalized, options)

  const geoLabel = options.filter.geo ?? 'tutta Italia'
  const sectorLabel = options.filter.sectors?.join(', ') ?? 'tutti i settori'
  console.log(`   Filtro: ${geoLabel} / ${sectorLabel} → ${filtered.length.toLocaleString('it')} aziende`)

  const offset = options.offset ?? 0
  const maxLeads = options.maxLeads ?? 50
  const slice = filtered.slice(offset, offset + maxLeads)
  console.log(`   Slice: ${slice.length} lead (righe ${offset}–${offset + slice.length})`)

  return slice.map(row => csvRowToLead(row, options.campaignId))
}

function parseCSV(filePath: string): Record<string, string>[] {
  const content = readFileSync(filePath, 'utf-8')
  return parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    bom: true,
  })
}

function parseExcel(filePath: string): Record<string, string>[] {
  const workbook = XLSX.readFile(filePath)
  // Usa il foglio "Lead Prospecting" se esiste, altrimenti il primo
  const sheetName = workbook.SheetNames.find(n =>
    n.toLowerCase().includes('lead') || n.toLowerCase().includes('prospecting')
  ) ?? workbook.SheetNames[0]
  const sheet = workbook.Sheets[sheetName]
  return XLSX.utils.sheet_to_json(sheet, { defval: '' }) as Record<string, string>[]
}

function normalizeRow(row: Record<string, string>): CSVRow {
  const result: Partial<CSVRow> = {}

  // Normalizza chiavi: lowercase + rimuovi spazi extra
  const lowerRow: Record<string, string> = {}
  for (const [k, v] of Object.entries(row)) {
    lowerRow[k.toLowerCase().trim()] = String(v ?? '').trim()
  }

  for (const [field, aliases] of Object.entries(COLUMN_ALIASES) as [keyof CSVRow, string[]][]) {
    for (const alias of aliases) {
      if (lowerRow[alias] !== undefined) {
        result[field] = lowerRow[alias]
        break
      }
    }
  }

  // --- Pulizia post-mappatura ---

  // Città: "10124 Torino TO" → "Torino"
  if (result.city) {
    result.city = extractCityName(result.city)
  }

  // Settore: "ristorante - Torino" → "ristorante"
  // (il file ha categoria nel formato "tipo - Città")
  if (result.sector) {
    result.sector = result.sector.split(' - ')[0].trim()
  }

  return {
    name:      result.name ?? 'N/D',
    sector:    result.sector,
    city:      result.city,
    address:   result.address,
    phone:     result.phone,
    email:     result.email,
    rating:    result.rating,
    reviews:   result.reviews,
    maps_url:  result.maps_url,
    contacted: result.contacted,
    status:    result.status,
    vat:       result.vat,
  }
}

// "10124 Torino TO" → "Torino"
// "10124 To TO"     → "To" (fallback)
function extractCityName(raw: string): string {
  // Pattern: codice postale (5 cifre) + spazio + nome città + spazio + sigla provincia (2 lettere maiuscole)
  const match = raw.match(/^\d{5}\s+(.+?)\s+[A-Z]{2}$/)
  if (match) return match[1].trim()
  // Fallback: prendi tutto dopo eventuale codice postale
  const fallback = raw.replace(/^\d{5}\s+/, '').trim()
  return fallback || raw
}

function applyFilters(rows: CSVRow[], options: CSVImportOptions): CSVRow[] {
  const skipContacted = options.skipContacted ?? true

  return rows.filter(row => {
    // Scarta righe senza nome
    if (!row.name || row.name === 'N/D') return false

    // Scarta già contattati
    if (skipContacted && row.contacted) {
      const v = row.contacted.toLowerCase()
      if (v === 'sì' || v === 'si' || v === 'yes' || v === '1' || v === 'true') return false
    }

    // Filtro geografico — matcha su città estratta
    if (options.filter.geo) {
      const geo = options.filter.geo.toLowerCase()
      const matchCity = row.city?.toLowerCase().includes(geo)
      const matchAddress = row.address?.toLowerCase().includes(geo)
      if (!matchCity && !matchAddress) return false
    }

    // Filtro settore
    if (options.filter.sectors && options.filter.sectors.length > 0) {
      const sector = (row.sector ?? '').toLowerCase()
      const match = options.filter.sectors.some(s => sector.includes(s.toLowerCase()))
      if (!match) return false
    }

    return true
  })
}

function csvRowToLead(row: CSVRow, campaignId: string): Omit<Lead, 'id' | 'created_at' | 'updated_at'> {
  const rating = row.rating ? parseFloat(row.rating.replace(',', '.')) : undefined
  const reviewCount = row.reviews ? parseInt(row.reviews.replace(/\D/g, '')) : undefined

  return {
    campaign_id: campaignId,
    source: 'csv',
    name: row.name,
    company: row.name,
    city: row.city,
    phone: row.phone || undefined,
    email: row.email || undefined,
    status: 'discovered',
    raw_data: {
      sector: row.sector,
      address: row.address,
      rating,
      review_count: reviewCount,
      maps_url: row.maps_url,
      has_website: false,
      vat: row.vat,
    },
  }
}

// Utility: mostra anteprima colonne — utile prima di lanciare una campagna
export function previewFile(filePath: string, numRows = 5): void {
  const ext = extname(filePath).toLowerCase()
  let rows: Record<string, string>[]

  if (ext === '.csv') rows = parseCSV(filePath)
  else rows = parseExcel(filePath)

  console.log('\nColonne rilevate nel file:')
  console.log(' ', Object.keys(rows[0] ?? {}).join('\n  '))

  console.log(`\nPrime ${numRows} righe normalizzate:`)
  rows.slice(0, numRows).map(normalizeRow).forEach((r, i) => {
    console.log(`\n[${i + 1}] ${r.name}`)
    console.log(`    Settore: ${r.sector ?? '-'}`)
    console.log(`    Città:   ${r.city ?? '-'}`)
    console.log(`    Tel:     ${r.phone ?? '-'}`)
    console.log(`    Email:   ${r.email ?? '-'}`)
    console.log(`    Rating:  ${r.rating ?? '-'} (${r.reviews ?? '0'} rec.)`)
  })
}
