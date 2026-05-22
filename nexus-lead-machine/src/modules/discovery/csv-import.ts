import { readFileSync } from 'fs'
import { extname } from 'path'
import { parse } from 'csv-parse/sync'
import * as XLSX from 'xlsx'
import { Lead, CampaignInput } from '../../types'

// Mappatura flessibile dei nomi colonna — gestisce varianti italiane/inglesi
const COLUMN_ALIASES: Record<keyof CSVRow, string[]> = {
  name:    ['nome', 'ragione_sociale', 'ragione sociale', 'azienda', 'company', 'name', 'denominazione'],
  sector:  ['settore', 'categoria', 'attività', 'attivita', 'tipo', 'sector', 'category', 'tipo_attività'],
  city:    ['città', 'citta', 'comune', 'city', 'localita', 'località'],
  region:  ['regione', 'provincia', 'region', 'prov'],
  phone:   ['telefono', 'tel', 'phone', 'cellulare', 'mobile'],
  email:   ['email', 'e-mail', 'mail', 'posta'],
  vat:     ['partita_iva', 'p.iva', 'piva', 'vat', 'cf_piva', 'codice_fiscale'],
}

interface CSVRow {
  name: string
  sector?: string
  city?: string
  region?: string
  phone?: string
  email?: string
  vat?: string
}

export interface CSVImportOptions {
  campaignId: string
  filter: {
    geo?: string           // es. "Milano", "Lombardia", "Sicilia"
    sectors?: string[]     // es. ["ristorante", "bar", "pizzeria"]
  }
  maxLeads?: number
  offset?: number          // per paginare su file grande (es. riprendi dal lead 500)
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
    throw new Error(`Formato file non supportato: ${ext}. Usa .csv, .xlsx o .xls`)
  }

  console.log(`   📂 File caricato: ${rows.length.toLocaleString('it')} righe totali`)

  const normalized = rows.map(normalizeRow)
  const filtered = applyFilters(normalized, options.filter)
  console.log(`   🔍 Dopo filtri (${options.filter.geo ?? 'tutto'} / ${options.filter.sectors?.join(',') ?? 'tutti i settori'}): ${filtered.length.toLocaleString('it')} aziende`)

  const offset = options.offset ?? 0
  const maxLeads = options.maxLeads ?? 50
  const slice = filtered.slice(offset, offset + maxLeads)
  console.log(`   ✂️  Slice selezionata: ${slice.length} lead (da riga ${offset} a ${offset + slice.length})`)

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
  const sheet = workbook.Sheets[workbook.SheetNames[0]]
  return XLSX.utils.sheet_to_json(sheet, { defval: '' }) as Record<string, string>[]
}

function normalizeRow(row: Record<string, string>): CSVRow {
  const result: Partial<CSVRow> = {}
  const lowerRow: Record<string, string> = {}

  // Normalizza i nomi delle chiavi
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

  return {
    name: result.name ?? 'N/D',
    sector: result.sector,
    city: result.city,
    region: result.region,
    phone: result.phone,
    email: result.email,
    vat: result.vat,
  }
}

function applyFilters(rows: CSVRow[], filter: CSVImportOptions['filter']): CSVRow[] {
  return rows.filter(row => {
    // Filtro geografico
    if (filter.geo) {
      const geo = filter.geo.toLowerCase()
      const matchCity = row.city?.toLowerCase().includes(geo)
      const matchRegion = row.region?.toLowerCase().includes(geo)
      if (!matchCity && !matchRegion) return false
    }

    // Filtro settore
    if (filter.sectors && filter.sectors.length > 0) {
      const sector = (row.sector ?? '').toLowerCase()
      const match = filter.sectors.some(s => sector.includes(s.toLowerCase()))
      if (!match) return false
    }

    // Scarta righe senza nome
    if (!row.name || row.name === 'N/D') return false

    return true
  })
}

function csvRowToLead(row: CSVRow, campaignId: string): Omit<Lead, 'id' | 'created_at' | 'updated_at'> {
  return {
    campaign_id: campaignId,
    source: 'google_maps',    // manteniamo 'google_maps' per compatibilità DB, o aggiungiamo 'csv'
    name: row.name,
    company: row.name,
    city: row.city,
    region: row.region,
    phone: row.phone,
    email: row.email,
    status: 'discovered',
    raw_data: {
      sector: row.sector,
      vat: row.vat,
      has_website: false,     // per definizione: la lista è di aziende senza sito
    },
  }
}

// Utility: anteprima colonne del file (utile per capire la mappatura)
export function previewFile(filePath: string, numRows = 3): void {
  const ext = extname(filePath).toLowerCase()
  let rows: Record<string, string>[]

  if (ext === '.csv') {
    rows = parseCSV(filePath)
  } else {
    rows = parseExcel(filePath)
  }

  console.log('\n📋 Colonne rilevate:', Object.keys(rows[0] ?? {}).join(', '))
  console.log(`\n👀 Prime ${numRows} righe:`)
  rows.slice(0, numRows).forEach((r, i) => console.log(`   [${i + 1}]`, r))
}
