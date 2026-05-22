import 'dotenv/config'
import { Command } from 'commander'
import { runCampaign } from './agent'
import { CampaignInput } from './types'

const program = new Command()

program
  .name('nexus-lead-machine')
  .description('Automated lead generation agent for Nexus Agency')
  .version('1.0.0')

program
  .command('campaign')
  .description('Avvia una nuova campagna di lead generation')
  .requiredOption('-n, --name <name>', 'Nome della campagna')
  .requiredOption(
    '-t, --target <type>',
    'Tipo di target: pmi | professional | agency'
  )
  .requiredOption(
    '-s, --service <service>',
    'Servizio da pitchare: sito_web | gestionale | automazione | app | sistema_agentico'
  )
  .requiredOption('-g, --geo <geo>', 'Area geografica (es. "Milano", "Sicilia")')
  .option('-m, --max <number>', 'Numero massimo di lead da cercare', '50')
  .option('-k, --keywords <keywords>', 'Keyword aggiuntive separate da virgola')
  .action(async (opts) => {
    const input: CampaignInput = {
      name: opts.name,
      target_type: opts.target as CampaignInput['target_type'],
      service_focus: opts.service as CampaignInput['service_focus'],
      geo: opts.geo,
      max_leads: parseInt(opts.max),
      keywords: opts.keywords?.split(',').map((k: string) => k.trim()),
    }

    await runCampaign(input)
  })

program.parse(process.argv)
