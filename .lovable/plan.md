

## Problema

Nella pagina `/casi-studio` ci sono **due blocchi KPI identici**. La sezione KPI nell'hero (sotto il pulsante CTA verde) non è stata modificata e i 3 elementi sono ancora troppo vicini tra loro con le linee separatrici schiacciate.

## Piano

### Modificare i KPI nell'hero (righe 351-361 di `src/pages/CasiStudio.tsx`)

Sostituire il layout attuale (`flex flex-wrap gap-10` con margini negativi per i separatori) con lo stesso pattern `justify-between` già applicato alla sezione sottostante:

- Usare `flex items-center justify-between max-w-2xl w-full` per distribuire i 3 KPI uniformemente
- Usare `React.Fragment` per inserire i separatori `w-px h-12` tra gli elementi
- Rimuovere i `gap-10` e `-ml-10` che causano la compressione

Risultato: spaziatura identica a quella della sezione "Prodotti che Generano Risultati".

### File coinvolto
- `src/pages/CasiStudio.tsx` — righe 351-361

