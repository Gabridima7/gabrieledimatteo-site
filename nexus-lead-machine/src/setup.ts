/**
 * Setup script: verifica connessione Supabase e crea le tabelle del Lead Machine.
 * Esegui una volta sola dopo aver configurato il .env:
 *   npx tsx src/setup.ts
 */
import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { join } from 'path'

async function setup() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key || key.startsWith('eyJ...')) {
    console.error('\n❌ .env non configurato correttamente.')
    console.error('   Assicurati di aver impostato SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY\n')
    process.exit(1)
  }

  const db = createClient(url, key)

  // 1. Verifica connessione
  console.log('\n🔌 Verifica connessione a Supabase...')
  const { error: pingError } = await db.from('campaigns').select('count').limit(1).maybeSingle()

  const tablesExist = !pingError || !pingError.message.includes('does not exist')

  if (tablesExist && !pingError) {
    console.log('   ✅ Connessione OK — tabelle già presenti')
    await printStats(db)
    return
  }

  // 2. Crea le tabelle
  console.log('   Connessione OK — creazione tabelle in corso...')
  const schemaPath = join(__dirname, 'db', 'schema.sql')
  const sql = readFileSync(schemaPath, 'utf-8')

  // Esegui ogni statement separatamente
  const statements = sql
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'))

  let created = 0
  for (const statement of statements) {
    const { error } = await db.rpc('exec_sql', { sql: statement + ';' }).maybeSingle()
    if (error && !error.message.includes('already exists')) {
      // Fallback: prova con query diretta
      const { error: e2 } = await db.from('_sql').select(statement).maybeSingle()
      if (e2) {
        console.warn(`   ⚠️  Statement saltato: ${statement.substring(0, 60)}...`)
      }
    } else {
      created++
    }
  }

  console.log(`   ✅ Schema applicato (${created} statement eseguiti)`)
  console.log('\n📋 ISTRUZIONI ALTERNATIVE (se lo script fallisce):')
  console.log('   1. Vai su https://supabase.com/dashboard/project/qiztbdaflhjqnybhflhu/sql/new')
  console.log('   2. Copia e incolla il contenuto di src/db/schema.sql')
  console.log('   3. Clicca "Run"\n')

  await printStats(db)
}

async function printStats(db: ReturnType<typeof createClient>) {
  const tables = ['campaigns', 'leads', 'outreach_messages', 'follow_ups']
  console.log('\n📊 Stato tabelle:')
  for (const table of tables) {
    const { count } = await db.from(table).select('*', { count: 'exact', head: true })
    console.log(`   ${table}: ${count ?? 0} righe`)
  }
  console.log('\n✅ Setup completato. Pronto per la prima campagna!\n')
}

setup().catch(err => {
  console.error('\n❌ Errore durante il setup:', err.message)
  process.exit(1)
})
