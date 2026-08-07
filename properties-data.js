/* ============================================================
   Lungarno Estate — dati condivisi immobili + motore i18n IT/EN
   Usato sia da index.html (immobili in evidenza) sia da immobili.html
   (catalogo filtrabile) — unica fonte dati, nessuna duplicazione.
   ============================================================ */

const ZONES = [
  { key: 'chianti',   it: 'Chianti',              en: 'Chianti' },
  { key: 'fiesole',   it: 'Fiesole',               en: 'Fiesole' },
  { key: 'colline',   it: 'Colline Fiorentine',    en: 'Florence Hills' },
  { key: 'oltrarno',  it: 'Oltrarno',              en: 'Oltrarno' },
  { key: 'centro',    it: 'Centro Storico',        en: 'Historic Centre' },
  { key: 'valdorcia', it: "Val d'Orcia",           en: "Val d'Orcia" },
];

const TYPES = [
  { key: 'casale',       it: 'Casale',        en: 'Farmhouse' },
  { key: 'villa',        it: 'Villa',         en: 'Villa' },
  { key: 'palazzo',      it: "Palazzo d'epoca", en: 'Historic Palazzo' },
  { key: 'attico',       it: 'Attico',        en: 'Penthouse' },
  { key: 'appartamento', it: 'Appartamento',  en: 'Apartment' },
  { key: 'tenuta',       it: 'Tenuta',        en: 'Estate' },
];

const PROPERTIES = [
  {
    id: 'casale-chianti',
    zone: 'chianti',
    type: 'casale',
    price: 1450000,
    rooms: 6,
    baths: 4,
    sqm: 420,
    image: 'images/property-casale-chianti.jpg',
    featured: true,
    title: { it: 'Casale in Chianti', en: 'Chianti Farmhouse' },
    desc: {
      it: 'Antico casale in pietra tra le colline del Chianti, vigneto di proprietà e vista sui filari.',
      en: 'Historic stone farmhouse in the Chianti hills, with a private vineyard and rows view.',
    },
    descLong: {
      it: 'Immerso tra i vigneti del Chianti, questo casale in pietra del XVIII secolo conserva soffitti a travi originali e un grande camino in pietra serena. La proprietà include un vigneto di circa due ettari, un frantoio storico riconvertito a dependance e una piscina naturale che si affaccia sulla valle.',
      en: 'Set among the vineyards of Chianti, this 18th-century stone farmhouse retains its original beamed ceilings and a large pietra serena fireplace. The property includes roughly two hectares of vineyard, a historic olive mill converted into a guest house, and a natural pool overlooking the valley.',
    },
    features: {
      it: ['Vigneto di proprietà (2 ha)', 'Frantoio storico riconvertito', 'Piscina naturale panoramica', 'Travi a vista e camino originale'],
      en: ['Private vineyard (2 ha)', 'Historic olive mill conversion', 'Panoramic natural pool', 'Exposed beams and original fireplace'],
    },
    images: ['images/property-casale-chianti.jpg', 'images/property-cucina-lusso.jpg'],
  },
  {
    id: 'villa-fiesole',
    zone: 'fiesole',
    type: 'villa',
    price: 2850000,
    rooms: 5,
    baths: 5,
    sqm: 380,
    image: 'images/property-villa-moderna.jpg',
    featured: true,
    title: { it: 'Villa con piscina, Fiesole', en: 'Villa with Pool, Fiesole' },
    desc: {
      it: 'Villa contemporanea sulle colline di Fiesole, piscina a sfioro e vista su Firenze.',
      en: 'Contemporary villa in the Fiesole hills, infinity pool overlooking Florence.',
    },
    descLong: {
      it: 'Villa contemporanea costruita su tre livelli, disegnata per sfruttare al massimo la vista sulla città. Ampie vetrate a tutta altezza collegano gli spazi living al giardino mediterraneo, mentre la piscina a sfioro sembra proseguire idealmente verso i tetti di Firenze.',
      en: 'A contemporary villa built over three levels, designed to make the most of its view over the city. Full-height glazing connects the living spaces to the Mediterranean garden, while the infinity pool seems to flow seamlessly toward the rooftops of Florence.',
    },
    features: {
      it: ['Piscina a sfioro con vista Firenze', 'Vetrate a tutta altezza', 'Giardino mediterraneo curato', 'Domotica di ultima generazione'],
      en: ['Infinity pool with Florence views', 'Full-height glazing', 'Landscaped Mediterranean garden', 'Latest-generation home automation'],
    },
    images: ['images/property-villa-moderna.jpg', 'images/property-camera-lusso.jpg'],
  },
  {
    id: 'villa-design-colline',
    zone: 'colline',
    type: 'villa',
    price: 3200000,
    rooms: 6,
    baths: 6,
    sqm: 510,
    image: 'images/property-villa-design.jpg',
    featured: true,
    title: { it: 'Villa di design, Colline Fiorentine', en: 'Design Villa, Florence Hills' },
    desc: {
      it: 'Architettura contemporanea in pietra e vetro, giardino mediterraneo e ampi spazi esterni.',
      en: 'Contemporary stone-and-glass architecture, Mediterranean garden and generous outdoor spaces.',
    },
    descLong: {
      it: 'Un progetto di architettura contemporanea che dialoga con il paesaggio toscano: volumi in pietra locale e grandi superfici vetrate, distribuiti attorno a un patio centrale. Gli spazi esterni includono una piscina a sfioro, un giardino mediterraneo e una zona pranzo all\'aperto coperta.',
      en: 'A contemporary architectural project in dialogue with the Tuscan landscape: volumes in local stone and expansive glazing, arranged around a central patio. The outdoor spaces include an infinity pool, a Mediterranean garden and a covered outdoor dining area.',
    },
    features: {
      it: ['Patio centrale con piscina a sfioro', 'Pietra locale e vetrate su misura', 'Zona pranzo esterna coperta', 'Efficienza energetica classe A'],
      en: ['Central patio with infinity pool', 'Local stone and bespoke glazing', 'Covered outdoor dining area', 'Energy class A efficiency'],
    },
    images: ['images/property-villa-design.jpg', 'images/property-cucina-lusso.jpg'],
  },
  {
    id: 'palazzo-oltrarno',
    zone: 'oltrarno',
    type: 'palazzo',
    price: 1980000,
    rooms: 4,
    baths: 3,
    sqm: 280,
    image: 'images/property-palazzo-storico.jpg',
    featured: false,
    title: { it: "Palazzo d'epoca, Oltrarno", en: 'Historic Palazzo, Oltrarno' },
    desc: {
      it: 'Piano nobile in palazzo storico, affreschi originali e soffitti a cassettoni.',
      en: 'Noble floor within a historic palazzo, original frescoes and coffered ceilings.',
    },
    descLong: {
      it: 'Piano nobile di circa 280 mq all\'interno di un palazzo del Seicento nel cuore dell\'Oltrarno, a pochi passi da Palazzo Pitti. Soffitti affrescati, pavimenti originali in cotto e un salone di rappresentanza con soffitto a cassettoni raccontano la storia del palazzo, oggi restaurato con impianti completamente a norma.',
      en: 'A noble floor of roughly 280 sqm within a 17th-century palazzo in the heart of Oltrarno, just steps from Palazzo Pitti. Frescoed ceilings, original terracotta floors and a grand reception room with a coffered ceiling tell the story of the building, now fully restored with up-to-code systems.',
    },
    features: {
      it: ['Affreschi e soffitti a cassettoni originali', 'A pochi passi da Palazzo Pitti', 'Impianti completamente rinnovati', 'Salone di rappresentanza'],
      en: ['Original frescoes and coffered ceilings', 'Steps from Palazzo Pitti', 'Fully renovated systems', 'Grand reception room'],
    },
    images: ['images/property-palazzo-storico.jpg', 'images/property-camera-lusso.jpg'],
  },
  {
    id: 'attico-centro',
    zone: 'centro',
    type: 'attico',
    price: 1650000,
    rooms: 3,
    baths: 2,
    sqm: 190,
    image: 'images/property-attico-centro.jpg',
    featured: true,
    title: { it: 'Attico, Centro Storico', en: 'Penthouse, Historic Centre' },
    desc: {
      it: 'Attico luminoso a due passi dal Duomo, terrazza panoramica e finiture di pregio.',
      en: 'Bright penthouse steps from the Duomo, panoramic terrace and premium finishes.',
    },
    descLong: {
      it: 'All\'ultimo piano di un edificio storico a due passi dal Duomo, questo attico unisce finiture contemporanee e una terrazza panoramica di 40 mq con vista sulla cupola del Brunelleschi. Gli interni, ristrutturati di recente, mantengono alcuni elementi originali come le travi a vista nella zona soggiorno.',
      en: "On the top floor of a historic building steps from the Duomo, this penthouse combines contemporary finishes with a 40 sqm panoramic terrace overlooking Brunelleschi's dome. The recently renovated interiors retain original features such as exposed beams in the living area.",
    },
    features: {
      it: ['Terrazza panoramica 40 mq', 'Vista sulla Cupola del Brunelleschi', 'Ristrutturazione recente', 'Ascensore diretto in appartamento'],
      en: ["40 sqm panoramic terrace", "Views of Brunelleschi's Dome", 'Recently renovated', 'Direct lift access to the apartment'],
    },
    images: ['images/property-attico-centro.jpg', 'images/property-cucina-lusso.jpg'],
  },
  {
    id: 'appartamento-signorile',
    zone: 'centro',
    type: 'appartamento',
    price: 980000,
    rooms: 3,
    baths: 2,
    sqm: 150,
    image: 'images/property-cucina-lusso.jpg',
    featured: false,
    title: { it: 'Appartamento signorile, Centro Storico', en: 'Elegant Apartment, Historic Centre' },
    desc: {
      it: 'Appartamento completamente ristrutturato, cucina su misura in marmo e travi a vista.',
      en: 'Fully renovated apartment, custom marble kitchen and exposed beams.',
    },
    descLong: {
      it: 'Appartamento completamente ristrutturato in un edificio d\'epoca del centro storico, con cucina su misura in marmo di Carrara e travi a vista nella zona giorno. La distribuzione degli spazi, ripensata in fase di ristrutturazione, offre tre camere e due bagni con finiture di pregio.',
      en: 'A fully renovated apartment in a period building in the historic centre, with a custom Carrara marble kitchen and exposed beams in the living area. The layout, redesigned during renovation, offers three bedrooms and two bathrooms finished to a high standard.',
    },
    features: {
      it: ['Cucina su misura in marmo di Carrara', 'Travi a vista nella zona giorno', 'Ristrutturazione completa', "Edificio d'epoca in centro storico"],
      en: ['Custom Carrara marble kitchen', 'Exposed beams in the living area', 'Fully renovated', 'Period building in the historic centre'],
    },
    images: ['images/property-cucina-lusso.jpg', 'images/property-camera-lusso.jpg'],
  },
  {
    id: 'tenuta-valdorcia',
    zone: 'valdorcia',
    type: 'tenuta',
    price: 4500000,
    rooms: 8,
    baths: 6,
    sqm: 650,
    image: 'images/property-val-dorcia.jpg',
    featured: false,
    title: { it: "Tenuta in Val d'Orcia", en: "Estate in Val d'Orcia" },
    desc: {
      it: 'Tenuta agricola con casale principale, dependance e uliveto, tra i paesaggi UNESCO.',
      en: 'Agricultural estate with main farmhouse, guest house and olive grove, in the UNESCO landscape.',
    },
    descLong: {
      it: "Tenuta agricola di circa 30 ettari nel cuore della Val d'Orcia, patrimonio UNESCO. Il casale principale, restaurato nel rispetto dell'architettura originale, è affiancato da una dependance indipendente e da un uliveto produttivo. Ideale per un progetto agrituristico o come residenza privata immersa nel paesaggio toscano.",
      en: "An agricultural estate of roughly 30 hectares in the heart of the Val d'Orcia, a UNESCO World Heritage landscape. The main farmhouse, restored in keeping with its original architecture, is flanked by an independent guest house and a productive olive grove. Ideal for an agritourism project or as a private residence immersed in the Tuscan countryside.",
    },
    features: {
      it: ['30 ettari tra uliveti e terreni agricoli', 'Dependance indipendente', "Paesaggio UNESCO Val d'Orcia", 'Potenziale agrituristico'],
      en: ['30 hectares of olive groves and farmland', 'Independent guest house', "UNESCO Val d'Orcia landscape", 'Agritourism potential'],
    },
    images: ['images/property-val-dorcia.jpg', 'images/about-vineyard-firenze.jpg'],
  },
  {
    id: 'residenza-fiesole',
    zone: 'fiesole',
    type: 'villa',
    price: 2100000,
    rooms: 4,
    baths: 3,
    sqm: 300,
    image: 'images/property-camera-lusso.jpg',
    featured: false,
    title: { it: 'Residenza con suite padronale, Fiesole', en: 'Residence with Master Suite, Fiesole' },
    desc: {
      it: 'Residenza signorile con suite padronale open space e parco privato secolare.',
      en: 'Elegant residence with an open-plan master suite and a private centuries-old park.',
    },
    descLong: {
      it: 'Residenza signorile immersa in un parco privato secolare sulle colline di Fiesole. La suite padronale, su livello indipendente, si apre con un ampio spazio open space che comprende zona notte, cabina armadio e bagno con vasca freestanding.',
      en: "An elegant residence set within a private centuries-old park in the hills of Fiesole. The master suite, on its own independent level, opens onto a generous open-plan space including the sleeping area, walk-in closet and a bathroom with a freestanding tub.",
    },
    features: {
      it: ['Parco privato secolare', 'Suite padronale open space', 'Cabina armadio e bagno con vasca freestanding', 'Posizione riservata sulle colline di Fiesole'],
      en: ['Private centuries-old park', 'Open-plan master suite', 'Walk-in closet and freestanding tub bathroom', 'Secluded position in the Fiesole hills'],
    },
    images: ['images/property-camera-lusso.jpg', 'images/property-villa-moderna.jpg'],
  },
];

const BUDGETS = [1000000, 1500000, 2000000, 3000000, 5000000];
const ROOM_MINIMUMS = [2, 3, 4, 5, 6];

function formatPrice(value, lang) {
  const locale = lang === 'en' ? 'en-US' : 'it-IT';
  return '€' + value.toLocaleString(locale);
}

function zoneLabel(key, lang) {
  const z = ZONES.find((z) => z.key === key);
  return z ? z[lang] : key;
}

function typeLabel(key, lang) {
  const t = TYPES.find((t) => t.key === key);
  return t ? t[lang] : key;
}

/* ============================================================
   Card immobile condivisa — usata da index.html (in evidenza),
   immobili.html (catalogo) e immobile.html (correlati), così i
   tre punti non possono divergere nel markup.
   ============================================================ */
function propertyCardHTML(p, lang) {
  return `
    <a class="property-card reveal is-visible" href="immobile.html?id=${p.id}">
      <div class="property-media">
        <img src="${p.image}" alt="${p.title[lang]}" loading="lazy">
        <span class="property-price">${formatPrice(p.price, lang)}</span>
      </div>
      <div class="property-body">
        <span class="p-zone">${zoneLabel(p.zone, lang)} · ${typeLabel(p.type, lang)}</span>
        <h3>${p.title[lang]}</h3>
        <p class="property-desc">${p.desc[lang]}</p>
        <div class="property-meta">
          <span>${p.rooms} ${I18N[lang]['card.rooms']}</span>
          <span>${p.baths} ${I18N[lang]['card.baths']}</span>
          <span>${p.sqm} ${I18N[lang]['card.sqm']}</span>
        </div>
      </div>
    </a>
  `;
}

/* ============================================================
   Dizionario testi statici IT/EN
   ============================================================ */
const I18N = {
  it: {
    'nav.properties': 'Immobili',
    'nav.about': 'Chi siamo',
    'nav.services': 'Servizi',
    'nav.team': 'Il team',
    'nav.contact': 'Contatti',
    'nav.cta': 'Richiedi consulenza',

    'hero.eyebrow': 'Agenzia Immobiliare di Lusso — Firenze',
    'hero.title': 'LUNGARNO ESTATE',
    'hero.subtitle': "Ville storiche, attici in centro e casali in Chianti: l'immobiliare di pregio a Firenze, curata nei minimi dettagli.",
    'hero.cta': 'Scopri gli immobili',

    'search.zone': 'Zona',
    'search.zone.any': 'Tutte le zone',
    'search.type': 'Tipologia',
    'search.type.any': 'Tutte le tipologie',
    'search.budget': 'Budget massimo',
    'search.budget.any': 'Nessun limite',
    'search.submit': 'Cerca immobili',

    'about.eyebrow': 'Dal 2005 a Firenze',
    'about.title': 'Eleganza ed esperienza nel mercato immobiliare fiorentino',
    'about.body': "Lungarno Estate nasce dalla passione per l'architettura e il patrimonio immobiliare di Firenze. Affianchiamo chi cerca casa e chi vende con la stessa cura: valutazioni oneste, trattative trasparenti e un network di proprietà che raramente arriva sul mercato aperto.",
    'about.cta': 'Scopri chi siamo',
    'about.feature1.title': 'Consulenza dedicata',
    'about.feature1.body': 'Un agente di riferimento segue ogni pratica dalla prima visita al rogito.',
    'about.feature2.title': 'Portfolio esclusivo',
    'about.feature2.body': 'Dalle ville sulle colline agli attici del centro storico, selezionati uno a uno.',
    'about.reviews': 'Recensioni clienti',
    'about.media.caption': 'Vigneti delle colline fiorentine',

    'services.eyebrow': 'Cosa facciamo',
    'services.title': 'I nostri servizi',
    'services.1.title': 'Compravendita',
    'services.1.body': 'Ricerca, negoziazione e chiusura per acquirenti e venditori, in Italia e all’estero.',
    'services.2.title': 'Locazioni di pregio',
    'services.2.body': 'Affitti brevi e lunghi per residenze storiche e ville con piscina.',
    'services.3.title': 'Valutazioni immobiliari',
    'services.3.body': 'Perizie indipendenti basate sui reali valori di mercato della zona.',
    'services.4.title': 'Gestione pratiche',
    'services.4.body': 'Certificazione energetica (APE), atti notarili e adempimenti burocratici.',
    'services.5.title': 'Ricerca su misura',
    'services.5.body': 'Property finding riservato per acquirenti internazionali e clientela privata.',
    'services.6.title': 'Consulenza investimenti',
    'services.6.body': 'Analisi di rendimento per immobili destinati a locazione turistica.',

    'featured.eyebrow': 'Selezione del momento',
    'featured.title': 'Immobili in evidenza',
    'featured.cta': 'Vedi tutti gli immobili',
    'card.details': 'Scopri di più',
    'card.rooms': 'camere',
    'card.baths': 'bagni',
    'card.sqm': 'mq',

    'team.eyebrow': 'Le persone',
    'team.title': 'Il nostro team',
    'team.body': 'Agenti con conoscenza approfondita del mercato fiorentino, per un servizio discreto e su misura.',
    'team.1.name': 'Alessandra Bellini',
    'team.1.role': 'Fondatrice & Broker',
    'team.2.name': 'Marco Fantoni',
    'team.2.role': 'Senior Property Advisor',
    'team.3.name': 'Giulio Renieri',
    'team.3.role': 'Responsabile Immobili di Prestigio',

    'stats.eyebrow': 'Perché Lungarno Estate',
    'stats.title': 'Numeri che parlano chiaro',
    'stats.1.value': '20+',
    'stats.1.label': 'Anni sul mercato fiorentino',
    'stats.2.value': '180+',
    'stats.2.label': 'Immobili venduti',
    'stats.3.value': '€420M',
    'stats.3.label': 'Controvalore transato',
    'stats.4.value': '98%',
    'stats.4.label': 'Clienti soddisfatti',

    'contact.eyebrow': 'Parliamone',
    'contact.title': 'Richiedi una consulenza riservata',
    'contact.body': 'Compila il form: un nostro consulente ti risponderà entro 24 ore lavorative.',
    'contact.name': 'Nome e cognome',
    'contact.email': 'Email',
    'contact.phone': 'Telefono',
    'contact.message': 'Raccontaci cosa stai cercando',
    'contact.submit': 'Invia richiesta',
    'contact.sending': 'Invio in corso…',
    'contact.success': 'Grazie! Ti risponderemo al più presto.',
    'contact.error': 'Si è verificato un errore. Riprova o scrivici direttamente via email.',
    'contact.note': 'Inviando il form accetti la nostra',
    'contact.note.link': 'informativa privacy',
    'contact.address': 'Indirizzo',
    'contact.hours': 'Orari',
    'contact.hours.value': 'Lun–Ven 9:30–13:00 · 15:00–19:00',

    'footer.rights': 'Tutti i diritti riservati.',
    'footer.demo': 'Sito dimostrativo — contenuti e immagini a scopo illustrativo.',

    'catalog.eyebrow': 'Il nostro portfolio',
    'catalog.title': 'I nostri immobili',
    'catalog.subtitle': 'Sfoglia la selezione di immobili di pregio a Firenze e in Toscana. Filtra per zona, tipologia, budget e numero di camere.',
    'filter.rooms': 'Camere minime',
    'filter.rooms.any': 'Qualsiasi',
    'filter.reset': 'Azzera filtri',
    'catalog.empty.title': 'Nessun immobile trovato',
    'catalog.empty.body': 'Prova a modificare o azzerare i filtri di ricerca.',
    'footer.privacy': 'Informativa privacy',

    'detail.back': 'Torna al catalogo',
    'detail.notfound.title': 'Immobile non trovato',
    'detail.notfound.body': "L'immobile che cerchi potrebbe essere stato rimosso, venduto o l'indirizzo non è corretto.",
    'detail.notfound.cta': 'Torna al catalogo',
    'detail.features.title': 'Caratteristiche',
    'detail.price.label': 'Prezzo',
    'detail.inquiry.title': 'Richiedi informazioni su questo immobile',
    'detail.inquiry.cta': 'Richiedi informazioni',
    'detail.inquiry.messagePrefix': 'Sono interessato a: ',
    'detail.related.title': 'Altri immobili che potrebbero interessarti',
    '404.title': 'Pagina non trovata',
    '404.body': 'La pagina che cerchi non esiste o è stata spostata.',
    '404.cta': 'Torna alla home',
  },
  en: {
    'nav.properties': 'Properties',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.cta': 'Request Consultation',

    'hero.eyebrow': 'Luxury Real Estate Agency — Florence',
    'hero.title': 'LUNGARNO ESTATE',
    'hero.subtitle': 'Historic villas, city-centre penthouses and Chianti farmhouses: fine Florentine real estate, curated down to the last detail.',
    'hero.cta': 'Discover our properties',

    'search.zone': 'Area',
    'search.zone.any': 'All areas',
    'search.type': 'Property type',
    'search.type.any': 'All types',
    'search.budget': 'Maximum budget',
    'search.budget.any': 'No limit',
    'search.submit': 'Search properties',

    'about.eyebrow': 'In Florence since 2005',
    'about.title': 'Elegance and expertise in the Florentine property market',
    'about.body': "Lungarno Estate was born from a passion for Florence's architecture and real estate heritage. We support buyers and sellers with the same care: honest valuations, transparent negotiations and a network of properties that rarely reach the open market.",
    'about.cta': 'Discover who we are',
    'about.feature1.title': 'Dedicated advisory',
    'about.feature1.body': 'A single point of contact follows every deal from the first viewing to closing.',
    'about.feature2.title': 'Exclusive portfolio',
    'about.feature2.body': 'From hillside villas to historic-centre penthouses, hand-picked one by one.',
    'about.reviews': 'Client reviews',
    'about.media.caption': 'Vineyards in the Florence hills',

    'services.eyebrow': 'What we do',
    'services.title': 'Our services',
    'services.1.title': 'Sales',
    'services.1.body': 'Search, negotiation and closing for buyers and sellers, in Italy and abroad.',
    'services.2.title': 'Prestige lettings',
    'services.2.body': 'Short and long-term rentals for historic residences and villas with pools.',
    'services.3.title': 'Property valuations',
    'services.3.body': 'Independent appraisals grounded in the area’s real market values.',
    'services.4.title': 'Paperwork management',
    'services.4.body': 'Energy performance certificates, notarial deeds and administrative filings.',
    'services.5.title': 'Bespoke property finding',
    'services.5.body': 'Confidential search service for international buyers and private clients.',
    'services.6.title': 'Investment advisory',
    'services.6.body': 'Yield analysis for properties intended for tourist rental.',

    'featured.eyebrow': "Today's selection",
    'featured.title': 'Featured properties',
    'featured.cta': 'View all properties',
    'card.details': 'Learn more',
    'card.rooms': 'rooms',
    'card.baths': 'baths',
    'card.sqm': 'sqm',

    'team.eyebrow': 'The people',
    'team.title': 'Our team',
    'team.body': 'Agents with deep knowledge of the Florentine market, for a discreet, tailored service.',
    'team.1.name': 'Alessandra Bellini',
    'team.1.role': 'Founder & Broker',
    'team.2.name': 'Marco Fantoni',
    'team.2.role': 'Senior Property Advisor',
    'team.3.name': 'Giulio Renieri',
    'team.3.role': 'Head of Prestige Properties',

    'stats.eyebrow': 'Why Lungarno Estate',
    'stats.title': 'Numbers that speak for themselves',
    'stats.1.value': '20+',
    'stats.1.label': 'Years in the Florentine market',
    'stats.2.value': '180+',
    'stats.2.label': 'Properties sold',
    'stats.3.value': '€420M',
    'stats.3.label': 'Total transacted value',
    'stats.4.value': '98%',
    'stats.4.label': 'Satisfied clients',

    'contact.eyebrow': "Let's talk",
    'contact.title': 'Request a confidential consultation',
    'contact.body': "Fill in the form and one of our advisors will get back to you within 24 working hours.",
    'contact.name': 'Full name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Tell us what you are looking for',
    'contact.submit': 'Send request',
    'contact.sending': 'Sending…',
    'contact.success': "Thank you! We'll get back to you shortly.",
    'contact.error': 'Something went wrong. Please try again or email us directly.',
    'contact.note': 'By sending this form you accept our',
    'contact.note.link': 'privacy policy',
    'contact.address': 'Address',
    'contact.hours': 'Hours',
    'contact.hours.value': 'Mon–Fri 9:30am–1pm · 3pm–7pm',

    'footer.rights': 'All rights reserved.',
    'footer.demo': 'Demo website — content and images for illustrative purposes only.',

    'catalog.eyebrow': 'Our portfolio',
    'catalog.title': 'Our Properties',
    'catalog.subtitle': 'Browse our selection of prestige properties in Florence and Tuscany. Filter by area, type, budget and number of rooms.',
    'filter.rooms': 'Minimum rooms',
    'filter.rooms.any': 'Any',
    'filter.reset': 'Reset filters',
    'catalog.empty.title': 'No properties found',
    'catalog.empty.body': 'Try adjusting or resetting your search filters.',
    'footer.privacy': 'Privacy Policy',

    'detail.back': 'Back to properties',
    'detail.notfound.title': 'Property not found',
    'detail.notfound.body': 'The property you are looking for may have been removed, sold, or the link is incorrect.',
    'detail.notfound.cta': 'Back to properties',
    'detail.features.title': 'Features',
    'detail.price.label': 'Price',
    'detail.inquiry.title': 'Request information about this property',
    'detail.inquiry.cta': 'Request information',
    'detail.inquiry.messagePrefix': 'I am interested in: ',
    'detail.related.title': 'Other properties you might like',
    '404.title': 'Page not found',
    '404.body': "The page you're looking for doesn't exist or has been moved.",
    '404.cta': 'Back to homepage',
  },
};

/* ============================================================
   Motore i18n condiviso: applica I18N[lang] a [data-i18n] /
   [data-i18n-placeholder], salva la preferenza, aggiorna gli
   switch di lingua nell'header.
   ============================================================ */
function getLang() {
  return localStorage.getItem('lungarno-lang') || 'it';
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('lungarno-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (I18N[lang][key] !== undefined) el.setAttribute('placeholder', I18N[lang][key]);
  });
  document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function initI18N() {
  applyLanguage(getLang());
  document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });
}
