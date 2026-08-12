# Piano di revisione mobile — Lungarno Estate

Modifiche derivate da una verifica su iPhone del sito in produzione.
Eseguire **una fase alla volta**, in ordine. Al termine di ogni fase: fermarsi, elencare i file toccati, attendere conferma.

## Regole generali

- **Tutte le modifiche riguardano solo mobile** (sotto 768px). Il layout desktop non va toccato in nessuna fase.
- Nessuna migrazione di framework: il sito resta HTML/CSS/JS statico.
- Non rifattorizzare la struttura, non rinominare file, non riorganizzare cartelle.
- Colori e spaziature passano dalle CSS custom properties già presenti; se non esistono, crearle in `:root`.
- Ogni modifica testuale va applicata **sia in IT sia in EN**.
- Nessuna dipendenza esterna. Icone come SVG inline.
- Verifica di riferimento: **390x844**.

---

## FASE 1 — Navbar (priorità massima)

La navbar è il difetto più visibile: alta, con il brand su due righe, e semi-trasparente in modo che il contenuto sottostante traspare durante lo scroll.

### 1.1 Opacità

Scorrendo, il testo delle sezioni si vede attraverso la barra (evidente su "Numeri che parlano chiaro", sezione team, contatti). Sembra un difetto di rendering.

- Rendere il fondo della navbar **completamente opaco** su mobile: colore pieno, nessuna trasparenza residua.
- Se è in uso `backdrop-filter`, verificarne il comportamento su Safari iOS, dove il supporto è incoerente. In caso di dubbio, sostituire con un fondo solido.
- Verificare che nessun testo sottostante sia visibile attraverso la barra in nessun punto della pagina.

### 1.2 Brand su una riga

"LUNGARNO ESTATE" va a capo su due righe e porta la navbar a circa 130px di altezza — il 15% dello schermo perso su ogni schermata.

- Ridurre la dimensione del testo del brand quanto basta perché stia su **una riga sola** a 390px.
- In alternativa, se la riduzione compromette la leggibilità: mostrare solo il monogramma `LE` sotto i 480px, tenendo il testo esteso da 480px in su.
- Obiettivo: navbar sotto gli **80px** di altezza.

### 1.3 Toggle lingua

Il selettore IT/EN occupa molta larghezza in una barra già stretta e viene usato di rado su un sito prevalentemente italiano.

- Spostarlo **dentro il menu hamburger**, in cima al pannello che si apre.
- Lo spazio recuperato va al brand.
- Su desktop il toggle resta dov'è.

---

## FASE 2 — Icone dei servizi

Tre servizi su sei ("Compravendita", "Locazioni di pregio", "Valutazioni immobiliari") usano una casetta pressoché identica. A colpo d'occhio sembra un errore di assegnazione.

Assegnare a ciascun servizio un'icona distinguibile:

| Servizio | Icona suggerita |
|---|---|
| Compravendita | chiavi, oppure stretta di mano |
| Locazioni di pregio | calendario, oppure chiave con etichetta |
| Valutazioni immobiliari | cartellino prezzo, oppure grafico a barre |
| Gestione pratiche | documento (già corretta) |
| Ricerca su misura | lente (già corretta) |
| Consulenza investimenti | grafico (già corretta) |

- Mantenere lo stesso stile di tratto, la stessa dimensione e lo stesso contenitore delle icone esistenti.
- Verificare che nessuna icona risulti duplicata nella sezione.

---

## FASE 3 — Spaziature verticali

Su mobile alcune transizioni tra sezioni lasciano quasi uno schermo intero vuoto. Punti individuati:

- tra la fine dei Servizi e "Immobili in evidenza"
- dopo il bottone "Vedi tutti gli immobili"
- dopo l'ultimo membro del team
- tra il blocco contatti e il footer

Interventi:

- Ridurre il padding verticale delle sezioni su mobile, portandolo a circa il 60% del valore desktop.
- Il vuoto residuo tra due sezioni non deve superare **120px**.
- Non comprimere lo spazio *interno* alle sezioni: la separazione tra un blocco e l'altro deve restare leggibile.

---

## FASE 4 — Form contatti

Nel form "Richiedi una consulenza riservata" la distanza tra il campo Telefono e l'etichetta "Raccontaci cosa stai cercando" è inferiore a quella tra gli altri campi.

- Uniformare la spaziatura tra tutti i gruppi campo-etichetta del form.
- Verificare che il bottone "Invia richiesta" abbia lo stesso margine superiore degli altri elementi.

---

## FASE 5 (opzionale) — Foto del team

Le tre foto provengono da fonti diverse e non si leggono come uno stesso team: un ritratto lifestyle all'aperto accanto a due ritratti formali in studio. In più ogni foto occupa quasi l'intera altezza dello schermo su mobile.

- Sostituire le immagini con tre ritratti dello **stesso registro**: tutti formali su fondo neutro, oppure tutti ambientati. Non mescolare.
- Ritagliare tutte le foto con la **stessa inquadratura** (busto, volto nella stessa posizione relativa) e lo stesso rapporto d'aspetto.
- Su mobile ridurre l'altezza della card: una foto non deve superare il **50% dell'altezza dello schermo**.
- Formato WebP, `loading="lazy"` su tutte tranne la prima.

---

## Checklist finale

- [ ] Navbar completamente opaca, nessun testo visibile attraverso
- [ ] Brand su una riga, navbar sotto gli 80px
- [ ] Toggle lingua dentro il menu hamburger
- [ ] Sei icone servizi tutte distinte
- [ ] Nessun vuoto tra sezioni superiore a 120px
- [ ] Spaziature del form contatti uniformi
- [ ] (opz.) Foto team coerenti tra loro e più contenute in altezza
- [ ] Nessuna regressione sul layout desktop
- [ ] Test completo su 390x844, IT ed EN
- [ ] Lighthouse mobile sull'URL Vercel: Performance e Accessibility
