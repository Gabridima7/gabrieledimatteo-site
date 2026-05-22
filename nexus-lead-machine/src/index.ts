import 'dotenv/config'
import { Command } from 'commander'
import { runCampaign } from './agent'
import { previewFile } from './modules/discovery/csv-import'
import { CampaignInput } from './types'

const program = new Command()

program
  .name('nexus-lead-machine')
  .description('Automated lead generation agent for Nexus Agency')
  .version('1.0.0')

// Comando principale: avvia una campagna
program
  .command('campaign')
  .description('Avvia una nuova campagna di lead generation')
  .requiredOption('-n, --name <name>', 'Nome della campagna')
  .requiredOption('-t, --target <type>', 'Tipo target: pmi | professional | agency')
  .requiredOption('-s, --service <service>', 'Servizio: sito_web | gestionale | automazione | app | sistema_agentico')
  .requiredOption('-g, --geo <geo>', 'Area geografica (es. "Milano", "Sicilia", "Italia")')
  .option('-f, --file <path>', 'Percorso al file CSV/XLSX con le aziende (es. ./aziende.csv)')
  .option('-m, --max <number>', 'Max lead da processare per campagna', '50')
  .option('-o, --offset <number>', 'Salta le prime N righe del CSV (per riprendere)', '0')
  .option('--sectors <sectors>', 'Filtro settori separati da virgola (es. "ristorante,bar,pizzeria")')
  .option('--linkedin', 'Abilita discovery LinkedIn via Apify (richiede APIFY_API_KEY)')
  .option('--google-maps', 'Abilita Google Maps (ATTENZIONE: genera costi!)')
  .action(async (opts) => {
    const input: CampaignInput = {
      name: opts.name,
      target_type: opts.target as CampaignInput['target_type'],
      service_focus: opts.service as CampaignInput['service_focus'],
      geo: opts.geo,
      max_leads: parseInt(opts.max),
      csv_file: opts.file,
      csv_offset: parseInt(opts.offset),
      sectors: opts.sectors?.split(',').map((s: string) => s.trim()),
      use_linkedin: opts.linkedin ?? false,
      use_google_maps: opts.googleMaps ?? false,
    }

    await runCampaign(input)
  })

// Comando utility: anteprima colonne del CSV
program
  .command('preview')
  .description('Mostra le colonne e le prime righe di un file CSV/XLSX')
  .requiredOption('-f, --file <path>', 'Percorso al file')
  .option('-r, --rows <number>', 'Numero di righe da mostrare', '5')
  .action((opts) => {
    previewFile(opts.file, parseInt(opts.rows))
  })

program.parse(process.argv)
