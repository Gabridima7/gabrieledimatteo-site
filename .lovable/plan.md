
# Perfezionamento sezione "Quali sono i prossimi passi?"

## Cosa cambia
L'unica differenza rimasta da correggere riguarda i **connettori tra gli step**: attualmente sono dei rombi angolari (quadrati ruotati a 45 gradi), mentre nel riferimento sono delle **curve morbide a goccia** (simili a una parentesi tonda rovesciata).

Tutto il resto (palette blu, icone stacked, titoli bold, layout) resta invariato.

## Dettaglio tecnico

**File da modificare:** `src/components/NextStepsSection.tsx`

**Modifica:** Sostituire i 3 connettori V-shaped (righe 77-94) attualmente implementati con `border-right` + `border-bottom` + `rotate(45deg)` con degli elementi SVG che disegnano una curva morbida a U rovesciata.

Il nuovo SVG per ogni connettore sara simile a:
```text
    <svg width="20" height="12" viewBox="0 0 20 12">
      <path d="M0 0 Q10 12 20 0" 
            stroke="rgba(255,255,255,0.15)" 
            stroke-width="1" 
            fill="none" />
    </svg>
```

Posizionamento: assoluto, centrato ai punti 25%, 50%, 75% della larghezza, allineato al `top: 28px` della linea orizzontale, visibile solo su desktop (`hidden lg:block`).
