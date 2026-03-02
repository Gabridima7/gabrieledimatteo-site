

## Traduzione pagina /contatti in inglese

Aggiungere il supporto bilingue (IT/EN) alla pagina `/contatti`, seguendo il pattern gia utilizzato nel resto del sito con `LanguageContext` e `translations.ts`.

### Cosa cambia

**1. Aggiunta traduzioni in `src/i18n/translations.ts`**

Nuova sezione `contatti` con tutte le stringhe della pagina:
- Breadcrumb ("Home", "Contatti")
- Nome e ruolo del founder
- I 3 punti beneficio (rispondiamo entro 12 ore, NDA, specialisti)
- Label "Contattaci" e "Prenota una call"
- Titolo form "Parlaci del tuo progetto"
- Label campi (Nome completo, Email aziendale, Il tuo progetto)
- Placeholder dei campi
- Testo bottone file upload
- Disclaimer privacy/cookie
- Bottone "Invia"
- Messaggio di successo ("Grazie!", "Ti risponderemo...")

**2. Modifica `src/pages/Contatti.tsx`**

- Importare `useLanguage` dal context
- Sostituire tutte le stringhe hardcoded con chiamate `t('contatti', 'chiave')`
- La struttura e lo stile della pagina restano invariati

