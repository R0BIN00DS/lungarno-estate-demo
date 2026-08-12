# Piano di revisione — Lungarno Estate (demo)

Modifiche derivate da una review esterna del sito. Eseguire **una fase alla volta**, in ordine.
Al termine di ogni fase: fermarsi, elencare i file toccati, attendere conferma prima di procedere.

## Regole generali

- **Non** migrare a Next.js o altri framework. Il sito resta HTML/CSS/JS statico.
- **Non** rifattorizzare la struttura esistente, non rinominare file, non riorganizzare cartelle.
- Ogni modifica di colore/spaziatura passa da **CSS custom properties** già presenti; se non esistono, crearle in `:root` invece di hardcodare valori nei singoli selettori.
- Tutte le modifiche testuali vanno applicate **sia alla versione IT sia alla versione EN**.
- Non introdurre dipendenze o librerie esterne. Le icone sono SVG inline.

---

## FASE 1 — Fix tecnici

### 1.1 Link di navigazione rotti

Tutti i link interni (navbar, footer quicklinks, eventuali CTA) puntano a `index.html#sezione`.
Questo causa un **ricaricamento completo della pagina** a ogni click invece dello scroll.

- Cercare in tutto il progetto `href="index.html#` e sostituire con `href="#`.
- Verificare che ogni ancora abbia un `id` corrispondente nella pagina (`#properties`, `#about`, `#services`, `#team`, `#contact`).
- Confermare che lo smooth scroll funzioni (`scroll-behavior: smooth` su `html`).
- Aggiungere `scroll-margin-top` alle sezioni pari all'altezza della navbar, così il titolo non finisce sotto il menu fisso.

### 1.2 Rimozione trattini lunghi (em dash)

I trattini lunghi sono il marcatore più riconoscibile di testo generato da AI. Vanno eliminati ovunque.

- Fare grep su tutto il progetto (HTML, JS, JSON, meta tag, `alt`, `title`) dei caratteri: `—` (em dash), `–` (en dash), `--`.
- Sostituzioni specifiche già individuate:
  - `— LUXURY REAL ESTATE AGENCY — FLORENCE` → `LUXURY REAL ESTATE AGENCY · FLORENCE`
  - `— IN FLORENCE SINCE 2005` → `IN FLORENCE SINCE 2005`
- Nel resto del copy: sostituire con virgola, punto, due punti o riformulare la frase. **Non** sostituire meccanicamente con `·` nel corpo del testo — il separatore `·` va usato solo nelle eyebrow e nelle etichette (dove è già in uso, es. `CHIANTI · FARMHOUSE`).
- Controllare anche `<title>`, meta description e Open Graph tags.
- Al termine, riportare l'elenco delle occorrenze trovate e come sono state risolte.

---

## FASE 2 — Hero

### 2.1 Rimuovere il bottone "Discover our properties" / "Scopri le proprietà"

Duplica la funzione del form di ricerca sottostante. Due CTA che fanno la stessa cosa diluiscono la conversione.
Rimuovere il bottone e il relativo CSS orfano. Il form resta l'unica CTA della hero.

### 2.2 Alzare heading, subheading e form

Attualmente c'è troppo spazio vuoto sopra il titolo: il form di ricerca cade sotto la piega.

- Ridurre il `padding-top` / `min-height` della hero finché **il form è interamente visibile above the fold a 1440×900**.
- Verificare che su mobile (390×844) restino visibili almeno titolo, sottotitolo e il primo campo del form.
- Non ridurre l'altezza al punto da tagliare l'immagine di sfondo in modo innaturale.

### 2.3 Nuovo accent color

L'oro/beige attuale non stacca: è troppo vicino ai toni chiari e scuri già presenti nel tema, quindi la CTA non ha contrasto sufficiente.

- Definire una nuova variabile `--accent` in `:root` con il valore definitivo **Bordeaux `#6B2233`** e applicarla a: bottone "Request Consultation", bottone di submit del form, stati `:hover` e `:focus-visible`, link attivi, badge.
- Testo bianco (`#FFFFFF`) su tutti gli elementi con sfondo `--accent`.
- Il vecchio oro `--gold` resta **solo** per dettagli tipografici minori: eyebrow, stelle del rating, etichette categoria.
- Verificare contrasto WCAG AA (≥ 4.5:1) tra testo bianco e sfondo `--accent`.

### 2.4 Logo vero

Il quadratino beige con la "L" è chiaramente un placeholder.

- Creare un monogramma **SVG inline** con le lettere `LE`, oppure un'icona stilizzata di arcata/ponte (riferimento al Lungarno) in tratto sottile.
- Deve funzionare su sfondo chiaro e scuro: usare `currentColor` invece di un fill fisso.
- Generare favicon coerente (`favicon.svg` + fallback `.png` 32×32) e collegarla nell'`<head>`.

---

## FASE 3 — Sezione About

### 3.1 Leggibilità dell'eyebrow

`IN FLORENCE SINCE 2005` è quasi invisibile sopra l'immagine di sfondo.

- Schiarire il colore del testo e/o rafforzare l'overlay scuro dietro la colonna di testo (gradiente da sinistra, non un overlay piatto su tutta l'immagine).
- Obiettivo: contrasto ≥ 4.5:1 misurato sul punto più chiaro dello sfondo sottostante.

### 3.2 Icone "Dedicated advisory" e "Exclusive portfolio"

Le icone sono troppo piccole rispetto al blocco di testo che accompagnano.

- Portarle a un'altezza pari a **titolo + descrizione insieme** (indicativamente 48–56px).
- Layout a due colonne: `display: grid; grid-template-columns: auto 1fr; gap: 20px; align-items: center;` — icona a sinistra, centrata verticalmente sul blocco di testo.
- Mantenere lo stroke coerente con il resto del sito, aumentando `stroke-width` proporzionalmente perché non risultino sottili una volta ingrandite.

---

## FASE 4 — Featured properties

### 4.1 Pill del prezzo

`€1,450,000` sparisce sulle foto chiare.

- Sfondo scuro solido o semi-opaco: `background: rgba(0,0,0,.72); backdrop-filter: blur(8px);`
- Testo bianco, `font-weight: 600`.
- Verificare su tutte e cinque le card, comprese le foto più luminose (villa con piscina).

### 4.2 Spaziatura metriche

La riga `6 rooms · 4 baths · 420 sqm` è troppo attaccata alla descrizione.

- Aggiungere `margin-top: 20px` alla riga metriche.
- Opzionale: `border-top: 1px solid` molto chiaro come separatore, con `padding-top: 16px`.

### 4.3 Icone per le metriche

Aggiungere un'icona SVG inline prima di ogni valore:

| Metrica | Icona |
|---|---|
| rooms | letto |
| baths | vasca o doccia |
| sqm | quadrato con frecce diagonali (planimetria) |

- Dimensione 16px, `stroke-width` coerente, stesso colore grigio del testo.
- Allineamento: `display: inline-flex; align-items: center; gap: 6px;`

### 4.4 Aggiungere due immobili

Da 3 a 5 card. Tre immobili fanno sembrare l'agenzia vuota.

Nuove schede proposte (mantenere identica la struttura HTML delle esistenti):

1. **Attico Centro Storico** — Firenze · Attico — €1,890,000 — 4 rooms · 3 baths · 210 sqm
   Terrazza panoramica sui tetti del centro, a pochi passi dal Duomo.
2. **Appartamento San Niccolò** — Firenze · Appartamento — €980,000 — 3 rooms · 2 baths · 145 sqm
   Palazzo storico ristrutturato, soffitti affrescati e vista sull'Arno.

- Immagini: WebP, con `srcset` per 1x/2x e `loading="lazy"` su tutte le card oltre la prima.
- Verificare che la griglia gestisca 5 elementi senza buchi: su desktop 3 colonne (3 + 2 centrate) oppure passare a 2 righe bilanciate.

---

## FASE 5 (opzionale, consigliata) — Foto nelle recensioni

Nella sezione "Why Lungarno Estate" ogni testimonianza deve avere la foto della persona: senza volto le recensioni non sono credibili.

- Avatar circolare 48px a sinistra di nome e ruolo.
- Usare ritratti coerenti tra loro (stessa illuminazione e taglio), formato WebP, `alt` descrittivo.
- Se non ci sono foto reali disponibili, usare un placeholder neutro con le iniziali su sfondo `--accent` — mai un'icona utente generica.

---

## FASE 6 — Icone sezione Servizi

Nella sezione "Cosa facciamo" le icone attuali sono piccole, in stile outline sottile, e posizionate sopra il titolo: hanno poco peso visivo rispetto al testo.

- Ingrandire le icone in modo che abbiano peso visivo paragonabile al titolo.
- Cambiare stile: riempite, oppure racchiuse in un contenitore circolare o quadrato con sfondo tenue.
- Spostarle a sinistra del titolo, sulla stessa riga, allineate verticalmente al centro.
- Su mobile mantenere l'allineamento orizzontale se lo spazio lo consente.

---

## Checklist finale

- [ ] Nessun `index.html#` residuo nel progetto
- [ ] Nessun `—`, `–`, `--` in HTML, meta tag, alt e JS (IT + EN)
- [ ] Form della hero visibile above the fold a 1440×900
- [ ] Bottone duplicato rimosso, nessun CSS orfano
- [ ] Nuovo accent color applicato ovunque, contrasto AA verificato
- [ ] Logo SVG + favicon
- [ ] Eyebrow About leggibile
- [ ] Icone About ingrandite e allineate a sinistra
- [ ] Pill prezzo leggibile su tutte le card
- [ ] Icone metriche presenti e allineate
- [ ] 5 immobili in Featured, griglia senza buchi
- [ ] Icone Servizi ingrandite, a sinistra del titolo, sulla stessa riga
- [ ] Lighthouse: nessuna regressione su Performance e Accessibility
- [ ] Test su 1440×900, 1024×768, 390×844
