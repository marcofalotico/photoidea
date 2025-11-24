// src/content/services.js
// Modello dati per i servizi principali dello studio PhotoIdea.
//
// Ogni oggetto nel vettore "services" rappresenta una PAGINA SERVIZIO,
// es. /servizi/matrimonio.
//
// Campi principali (pensati per la pagina di dettaglio):
// - id: identificatore logico (usato anche per collegare blog, ecc.)
// - menuLabel: testo che compare nei menu (navbar, card servizi…)
// - slug: parte finale dell'URL (usata da React Router, es. /servizi/:slug)
// - seoSubtitle: sottotitolo descrittivo, utile per SEO
// - shortDescription: descrizione breve (anteprima su card, ecc.)
// - fullDescription: testo esteso per la pagina
// - heroImage: immagine principale grande del servizio
// - galleryKey / serviceGalleryImages: immagini per il carosello interno
// - ctaConfig: configurazione della call-to-action "Vuoi informazioni?"
// - packages: pacchetti / promozioni con prezzo e cosa include
// - limitedOffer: eventuale banner di offerta a tempo limitato
// - instagram: info per integrare il profilo IG
// - portfolioLink: bottone che porta alla sezione giusta del portfolio
// - photobook: sezione fotolibri per il servizio
// - videos: elenco video YouTube per la categoria
// - blogCategoryId: id usato per filtrare i blog relativi a questo servizio

export const services = [
  {
    id: "matrimonio",
    menuLabel: "Matrimonio",
    slug: "matrimonio", // <= SOLO la parte finale dell'URL
    seoSubtitle:
      "Fotografo di matrimonio a Torino e Piemonte: reportage autentico del tuo giorno speciale.",
    shortDescription: `Benvenuti nel nostro mondo di fotografia matrimoniale, dove ogni scatto racconta la vostra storia d’amore in modo autentico e spontaneo.`,
    fullDescription: `Benvenuti nel nostro mondo di fotografia matrimoniale, dove ogni scatto racconta la vostra storia d’amore in modo autentico e spontaneo.

Per noi, la fotografia di matrimonio è molto più di semplici immagini. È un racconto affettuoso, un reportage che cattura le emozioni e i momenti speciali del vostro giorno più importante.

Dalla preparazione al ricevimento, ci impegniamo a catturare ogni dettaglio senza interferire con il flusso naturale degli eventi. Con la presenza di due fotografi professionisti inclusi nel servizio, garantiamo una copertura completa e senza interruzioni.

Offriamo flessibilità con una vasta gamma di opzioni, dalle immagini ad alta risoluzione alla creazione di fotolibri stampati di alta qualità. Il vostro matrimonio è unico, e vogliamo che le vostre fotografie lo riflettano pienamente.

Siamo qui per ascoltare le vostre idee, i vostri desideri e trasformarli in ricordi tangibili che dureranno per sempre.`,
    heroImage: "/images/services/matrimonio/hero-matrimonio-001.jpg",

    // Chiave logica che puoi usare nella pagina Portfolio per legare la sezione Matrimonio
    galleryKey: "weddingMain",

    // 4. Carosello interno alla pagina servizio (immagini in loop con frecce)
    // Crea fisicamente questi file in public/images/services/matrimonio
    serviceGalleryImages: [
      "/images/services/matrimonio/hero-matrimonio-001.jpg",
      "/images/services/matrimonio/hero-matrimonio-002.jpg",
      "/images/services/matrimonio/hero-matrimonio-003.jpg",
      // puoi aggiungerne quante vuoi
    ],

    // 5. Call to action "Vuoi informazioni?"
    ctaConfig: {
      title: "Vuoi informazioni?",
      text: "Contattaci per avere un preventivo personalizzato per il servizio Matrimonio.",
      buttonLabel: "Chiedi informazioni",
      // route del form contatti
      targetRoute: "/contatti",
      // opzionale: soggetto da usare per precompilare il form/Redux state
      prefillSubject: "Richiesta informazioni servizio Matrimonio",
    },

    // 6. Pacchetti / promozioni per il servizio Matrimonio.
    // Questi dati verranno mostrati come card.
    packages: [],
    pricingPackages: [
      {
        id: "solo-file",
        name: "SOLO FILE",
        priceLabel: "a partire da 1.500 €",
        shortDescription:
          "",
        features: [
          "Incontro preliminare",
          "Servizio fotografico",
          "Consegna file Alta Risoluzione",
        ],
        ctaLabel: "Info pacchetto SOLO FILE",
        ctaSubject: "Info pacchetto SOLO FILE",
      },
      {
        id: "solo-fotolibro",
        name: "SOLO FOTOLIBRO",
        priceLabel: "a partire da 800 €",
        shortDescription:
          "",
        features: [
          "Postproduzione immagini",
          "Impaginazione grafica",
          "Stampa fotolibro 30×30 cm",
          "Custodia/Cofanetto",
        ],
        ctaLabel: "Info pacchetto SOLO FOTOLIBRO",
        ctaSubject: "Info pacchetto SOLO FOTOLIBRO",
      },
      {
        id: "servizio-completo",
        name: "SERVIZIO COMPLETO",
        priceLabel: "a partire da 2.200 €",
        shortDescription:
          "",
        features: [
          "Incontro preliminare",
          "Servizio fotografico",
          "Postproduzione immagini",
          "Impaginazione grafica",
          "Stampa fotolibro 30×30 cm",
          "Consegna file Alta Risoluzione",
        ],
        ctaLabel: "Info pacchetto SERVIZIO COMPLETO",
        ctaSubject: "Info pacchetto SERVIZIO COMPLETO",
      },
      {
        id: "solo-video",
        name: "SOLO VIDEO",
        priceLabel: "a partire da 1.200 €",
        shortDescription:
          "",
        features: [
          "Servizio video girato",
          "Montaggio 15/20 minuti",
          "Trailer 1/2 minuti",
          "Chiavetta USB e custodia personalizzata",
        ],
        ctaLabel: "Info pacchetto SOLO VIDEO",
        ctaSubject: "Info pacchetto SOLO VIDEO",
      },
    ],

    // 7. Banner per eventuale offerta a tempo limitato
    limitedOffer: {
      enabled: true,
      title: "OFFERTA A TEMPO LIMITATO",
      message:
        "Servizio fotografico COMPLETO e servizio VIDEO scontato di 200 euro !!",
      badgeLabel: "Promo",
      expiryText: "Offerta valida fino al 31/12/2025.",
    },

    // 8. Integrazione al profilo Instagram
    instagram: {
      username: "danielfalotico_fotografo",
      profileUrl: "https://www.instagram.com/danielfalotico_fotografo/",
      // Qui NON mettiamo embed vero (che richiederebbe script esterni),
      // ma una descrizione che poi useremo per mostrare anteprima + link.
      introText:
        "Scopri gli ultimi matrimoni reali sul nostro profilo Instagram.",
    },

    // 9. Pulsante verso portfolio sezione Matrimonio
    portfolioLink: {
      label: "Guarda le foto nel portfolio Matrimonio",
      // Potrai decidere se usare ancora questo 'sectionId' per filtrare/scrollare
      sectionId: "matrimonio",
      // Link effettivo del portfolio (es. con anchor o querystring)
      url: "/portfolio/foto-matrimonio",
    },

    // 10. Sezione fotolibri per il servizio selezionato
    photobook: {
      title: "FOTOLIBRO NOZZE E IMPAGINAZIONE GRAFICA",
      subtitle: "Album - Copertine - Contenitori - Wood Box",
      description: `
Creare è sempre stata la mia passione. Mi piace definirmi artigiana dell’immagine perché oltre a fotografare la realtà, curo personalmente l’impaginazione delle fotografie in un elegante fotolibro rispettando le aspettative dei miei clienti.

Per la stampa dei fotolibri mi affido a laboratori professionali e ad artigiani del settore che mi garantiscono sia qualità di stampa che rilegature sempre perfette.
Ogni modello di fotolibro viene realizzato con materiali pregiati, con copertine personalizzate su tela o con inserti in plexiglass o in metallo.

E’ importante attribuire ad ogni album l’unicità ed il carattere che merita, per questo non esitare a chiedermi l’impossibile e cercherò di realizzarlo.

Ho a disposizione una collezione esclusiva di album, copertine, cofanetti e contenitori completamente personalizzabili sia nei colori che nei materiali:
      `,
      images: [
        "/images/services/matrimonio/album-matrimonio-001.webp",
        "/images/services/matrimonio/album-matrimonio-002.webp",
        "/images/services/matrimonio/album-matrimonio-003.webp",
      ],
    },

    // 11. Video YouTube relativi a questa categoria (Matrimonio)
    // La pagina servizio potrà embeddare questi video usando l'id YouTube.
    videos: [
      {
        id: "matrimonio-video-1",
        title: "Trailer matrimonio in collina",
        youtubeURL: "YOUTUBE_ID_1",
        thumbnail: "/images/services/matrimonio/video-thumb-001.jpg",
        description: "Un breve trailer che racconta l’emozione del vostro giorno.",
      },
      {
        id: "matrimonio-video-2",
        title: "Wedding story in città",
        youtubeURL: "YOUTUBE_ID_2",
        thumbnail: "/images/services/matrimonio/video-thumb-002.jpg",
        description:
          "Cerimonia in centro città e ricevimento in location storica.",
      },
    ],

    // 12. Id usato per filtrare i blog legati a questo servizio.
    // In blogPosts.js potrai avere articoli con "serviceId: 'matrimonio'".
    blogCategoryId: "matrimonio",
  },

  // ======================================================================
  //  ALTRI SERVIZI (struttura identica, ma contenuti ancora da completare)
  // ======================================================================

  {
    id: "maternita",
    menuLabel: "Maternità",
    slug: "maternita", // <= SOLO la parte finale dell'URL
    seoSubtitle: "Servizi fotografici maternità in studio e in esterna a Torino.",
    shortDescription: `Benvenuta nel mondo della maternità, un viaggio straordinario fatto di emozioni, trasformazioni e amore incondizionato.`,
    fullDescription: `Benvenuta nel mondo della maternità, un viaggio straordinario fatto di emozioni, trasformazioni e amore incondizionato.

La gravidanza non è solo un momento di attesa, ma un capitolo unico e meraviglioso della tua vita e di chi ti circonda.

Desideriamo catturare la bellezza e la forza di questo momento così speciale attraverso il nostro servizio fotografico di maternità. Vogliamo farti sentire radiosa, piena di vita e di speranza, mentre il tuo corpo porta il dono più grande.

Il nostro obiettivo è trasformare la tua sessione fotografica in un’esperienza indimenticabile, un momento di condivisione e di celebrazione della tua femminilità e della tua maternità.

Nel nostro studio fotografico, avrai a disposizione una vasta selezione di luci, fondali, stole e abiti per scegliere quello che meglio esprime la tua bellezza e la tua personalità.

Dalla preparazione dei set agli scatti finali, lavoreremo insieme per creare ricordi che dureranno per sempre, stampati su pregiati fotolibri o conservati come file ad alta risoluzione.

Invitiamo te, il tuo compagno e la tua famiglia a partecipare a questa esperienza unica, in cui ogni sorriso, ogni carezza e ogni sguardo saranno immortalati con amore e dedizione.`,
    heroImage: "/images/services/maternita/hero-maternita-001.webp",
    galleryKey: "maternityMain",
    serviceGalleryImages: [
      "/images/services/maternita/maternita-001.webp",
      "/images/services/maternita/maternita-002.webp",
      "/images/services/maternita/maternita-003.webp",
      // aggiungi altre immagini quando le hai
    ],
    ctaConfig: {
      title: "Vuoi informazioni?",
      text: "Scrivici per ricevere un preventivo personalizzato per il servizio maternità.",
      buttonLabel: "Chiedi informazioni",
      targetRoute: "/contatti",
      prefillSubject: "Richiesta informazioni servizio Maternità",
    },
    packages: [],
    pricingPackages: [
      {
        id: "maternita-standard",
        name: "Maternità",
        priceLabel: "a partire da 280 €",
        shortDescription:
          "",
        features: [
          "n. 1/2 Ore di sessione",
          "n. 1/2 Sfondo a scelta",
          "n. 1/2 Cambio d’abito",
          "Foto Mum&Dad",
          "Galleria provini online",
          "n. 10 stampe 15×22",
          "n. 10 File Hi Res."
        ],
        ctaLabel: "Info pacchetto Maternità",
        ctaSubject: "Info pacchetto Maternità",
      },
      {
        id: "maternita-lux",
        name: "Maternità Lux",
        priceLabel: "a partire da 380 €",
        shortDescription:
          "",
        features: [
          "n. 2/3 Ore di sessione",
          "n. 2/3 Sfondo a scelta",
          "n. 2/3 Cambio d’abito",
          "Foto Mum&Dad",
          "Galleria provini online",
          "n. 15 stampe 15×22",
          "n. 15 File Hi Res."
        ],
        ctaLabel: "Info pacchetto Maternità Lux",
        ctaSubject: "Info pacchetto Maternità Lux",
      },
      {
        id: "neonato",
        name: "Neonato",
        priceLabel: "a partire da 380 €",
        shortDescription:
          "",
        features: [
          "n. 2/3 Ore di sessione",
          "n. n. 2/3 Set a scelta",
          "n. 2/3 Cambi outfit/set",
          "Foto Mum&Dad",
          "Galleria provini online",
          "n. 10 stampe 15×22",
          "n. 10 File Hi Res."
        ],
        ctaLabel: "Info pacchetto Neonato",
        ctaSubject: "Info pacchetto Neonato",
      },
    ],
    limitedOffer: {
      enabled: false,
    },
    instagram: {
      username: "photoidea.torino.maternity",
      profileUrl: "https://www.instagram.com/photoidea.torino.maternity/",
      introText: "Guarda le ultime sessioni maternità sul nostro profilo.",
    },
    portfolioLink: {
      label: "Guarda le foto nel portfolio Maternità",
      sectionId: "maternita",
      url: "/portfolio/foto-maternita",
    },
    photobook: null,
    videos: [],
    blogCategoryId: "maternita",
  },
  {
    id: "bambini-smashcake",
    menuLabel: "Bambini e Smash Cake",
    slug: "bambini-smashcake", // <= SOLO la parte finale dell'URL
    seoSubtitle:
      "Servizio fotografico bambini e smash cake in studio a Torino.",
    shortDescription: `La fotografia di neonati è un‘esperienza delicata e unica che cattura i primi momenti di vita entro i quindici giorni del bambino.`,
    fullDescription: `Benvenuti nella magia della fotografia di bambini a Torino
La fotografia di neonati è un‘esperienza delicata e unica che cattura i primi momenti di vita entro i quindici giorni del bambino. Le pose sono naturali, mirando a riflettere i movimenti spontanei che caratterizzano i primi giorni di vita del piccolo.

Il servizio fotografico sitter è pensato per i bambini che possono già sedersi autonomamente, catturando la loro spontaneità e la loro espressione genuina in momenti di gioia e meraviglia.

Lo smash cake, invece, celebra il primo compleanno del bambino in modo festoso e divertente. Un set allestito a tema e una piccola torta dedicata consentono al bambino di esplorare, giocare e divertirsi liberamente, creando ricordi indelebili per la famiglia.

Con il nostro servizio, avrai la possibilità di scegliere il set preferito e cambiare l’outfit del bambino per ottenere una varietà di scatti unici e memorabili.

Offriamo stampe di alta qualità, fotolibri incantevoli e file ad alta risoluzione delle foto selezionate, per conservare per sempre i momenti più preziosi della tua famiglia.

Prenota oggi stesso un appuntamento e unisciti a noi per progettare insieme i ricordi di questa straordinaria esperienza fotografica. Il sorriso di tuo figlio merita di essere catturato per l’eternità.`,
    heroImage: "/images/services/bambini-smashcake/hero-bambini-001.webp",
    galleryKey: "kidsSmashCake",
    serviceGalleryImages: [
      "/images/services/bambini-smashcake/bambini-001.webp",
      "/images/services/bambini-smashcake/bambini-002.webp",
      "/images/services/bambini-smashcake/bambini-003.webp",
      "/images/services/bambini-smashcake/bambini-004.webp",
      "/images/services/bambini-smashcake/bambini-005.webp",
      "/images/services/bambini-smashcake/bambini-006.webp",
      "/images/services/bambini-smashcake/bambini-007.webp",
    ],
    ctaConfig: {
      title: "Vuoi informazioni?",
      text: "Contattaci per ricevere un preventivo per il servizio bambini e smash cake.",
      buttonLabel: "Chiedi informazioni",
      targetRoute: "/contatti",
      prefillSubject: "Richiesta informazioni servizio Bambini & Smash Cake",
    },
    packages: [],
    pricingPackages: [],
    limitedOffer: { enabled: false },
    instagram: {
      username: "photoidea.torino.newborn",
      profileUrl: "https://www.instagram.com/photoidea.torino.newborn/",
      introText:
        "Sfoglia le ultime sessioni dedicate ai più piccoli sul nostro profilo.",
    },
    portfolioLink: {
      label: "Guarda le foto nel portfolio Bambini",
      sectionId: "bambini",
      url: "/portfolio/foto-bambini",
    },
    photobook: null,
    videos: [],
    blogCategoryId: "bambini-smashcake",
  },
  {
    id: "battesimo",
    menuLabel: "Battesimo",
    slug: "battesimo", // <= SOLO la parte finale dell'URL
    seoSubtitle: "Fotografia di Battesimo a Torino: Catturare i Momenti più Sacri.",
    shortDescription: `Il Battesimo è un momento di gioia, speranza e celebrazione, e catturare questi momenti preziosi attraverso la fotografia è un onore per me.`,
    fullDescription: `Il Battesimo è un momento di gioia, speranza e celebrazione, e catturare questi momenti preziosi attraverso la fotografia è un onore per me.

Il mio servizio fotografico per il Battesimo inizia con scatti emozionanti a casa, immortalando i momenti di preparazione del neonato insieme alla famiglia. È un momento intimo, carico di emozioni e significati, che amo cogliere attraverso il mio obiettivo.

In chiesa, sarò al vostro fianco per documentare ogni istante significativo del rito sacro, dalla benedizione dell’acqua al momento speciale del Battesimo stesso. Ogni sorriso, ogni sguardo di orgoglio e commozione sarà catturato con cura e rispetto.

Dopo la messa, ci dedicheremo alle foto di rito con padrini, madrine, nonni e parenti presenti, creando ricordi tangibili di questo giorno speciale.

Se lo desiderate, posso accompagnarvi al ristorante per narrare con le fotografie l’intera giornata di festa, catturando i momenti di gioia e condivisione con i vostri cari.

Scegliendo il mio servizio fotografico, scegliete di preservare per sempre i momenti più sacri e preziosi della vostra famiglia.`,
    heroImage: "/images/services/battesimo/hero-battesimo-001.webp",
    galleryKey: "baptismMain",
    serviceGalleryImages: [
      "/images/services/battesimo/battesimo-001.webp",
      "/images/services/battesimo/battesimo-002.webp",
      "/images/services/battesimo/battesimo-003.webp",
      "/images/services/battesimo/battesimo-004.webp",
    ],
    ctaConfig: {
      title: "Vuoi informazioni?",
      text: "Scrivici per conoscere le soluzioni dedicate al servizio Battesimo.",
      buttonLabel: "Chiedi informazioni",
      targetRoute: "/contatti",
      prefillSubject: "Richiesta informazioni servizio Battesimo",
    },
    packages: [],
    pricingPackages: [],
    limitedOffer: { enabled: false },
    instagram: null,
    portfolioLink: {
      label: "Guarda le foto nel portfolio Battesimo",
      sectionId: "battesimo",
      url: "/portfolio/foto-battesimo",
    },
    photobook: null,
    videos: [],
    blogCategoryId: "battesimo",
  },
  {
    id: "video-nozze-drone",
    menuLabel: "Video nozze e drone",
    slug: "video-nozze-drone", // <= SOLO la parte finale dell'URL
    seoSubtitle:"Sorvolando Emozioni: Riprese Aeree per il Vostro Matrimonio",
    shortDescription: `Le foto e le riprese video aeree stanno rivoluzionando il mondo dei matrimoni, offrendo uno sguardo unico e mozzafiato sul giorno più importante della vostra vita. Queste visioni dall’alto catturano non solo la magnificenza degli eventi, ma anche l’emozione e la grandezza di ogni momento.`,
    fullDescription: `Le foto e le riprese video aeree stanno rivoluzionando il mondo dei matrimoni, offrendo uno sguardo unico e mozzafiato sul giorno più importante della vostra vita. Queste visioni dall’alto catturano non solo la magnificenza degli eventi, ma anche l’emozione e la grandezza di ogni momento.

In questo articolo, esploreremo l’entusiasmante mondo delle riprese video con drone per i matrimoni, analizzando vantaggi e considerazioni importanti da tenere a mente prima di prendere questa decisione.

Ma prima, immergetevi nell’atmosfera di un matrimonio ripreso con il drone. Il breve trailer qui sotto vi darà solo un assaggio di ciò che è possibile realizzare. Troverete ulteriori video e ispirazioni in questa pagina.`,
    heroImage: "/images/services/video-nozze-drone/hero-video-nozze-001.webp",
    galleryKey: "weddingVideo",
    serviceGalleryImages: [
      "/images/services/video-nozze-drone/video-nozze-001.jpg",
    ],
    ctaConfig: {
      title: "Vuoi informazioni?",
      text: "Scrivici per scoprire le soluzioni foto + video per il tuo matrimonio.",
      buttonLabel: "Chiedi informazioni",
      targetRoute: "/contatti",
      prefillSubject: "Richiesta informazioni servizio Video nozze & drone",
    },
    packages: [],
    pricingPackages: [],
    limitedOffer: { enabled: false },
    instagram: null,
    portfolioLink: {
      label: "Guarda i video nel portfolio",
      sectionId: "matrimonio-video",
      url: "/portfolio/video-matrimonio", //TODO: creare questa pagina
    },
    photobook: null,
    videos: [],
    blogCategoryId: "video-nozze-drone",
  },
  {
    id: "video-aziendale-drone",
    menuLabel: "Video aziendale e drone",
    slug: "video-aziendale-drone", // <= SOLO la parte finale dell'URL
    seoSubtitle:
      "Produzione di video aziendali e riprese con drone per valorizzare il tuo brand.",
    shortDescription: `Scopri il potere delle riprese aeree con il nostro ultimo video! Con il nostro drone professionale, catturiamo angolazioni mozzafiato per valorizzare il tuo business.`,
    fullDescription: `Negli ultimi anni la visione e la condivisione di video si è diffusa in tutto il mondo. Milioni di persone guardano quotidianamente video su YouTube e su Facebook, solo per citare i più visualizzati.

L’introduzione delle “Stories” su Instagram, WhatsApp e Facebook puntano, inoltre, a stimolare la condivisione di video di ogni genere.

I video rappresentano un enorme potere informativo ed emozionale per il pubblico. Catturano più attenzione rispetto alle foto e al testo scritto. Spesso chi è interessato al prodotto è molto probabile che guardi tutto il filmato dedicando estrema attenzione, a differenza della pubblicità testuale che viene spesso letta a frammenti.

Un breve video del prodotto aiuta a vendere di più. Se il video è ben fatto, coinvolgente e con spettacolari riprese aeree, sarà sicuramente anche apprezzato e suggerito, quindi condiviso con gli amici.

Attraverso il passaparola gratuito, diventerà una pubblicità efficace ed interessante.

Promuovere la propria attività con un video aziendale realizzato con il drone ha diversi punti di forza:
- le riprese a terra;
- una voce narrante;
- una traccia di sottofondo;
- inserimento di testi e slogan;

CONSIDERAZIONI FINALI

Per ottenere un montaggio efficace spesso può essere utile farsi sottoporre delle bozze da chi eseguirà il montaggio del messaggio finale. Quasi nessuno richiede un video grezzo senza un minimo di montaggio.

Tenete presente che il momento ideale per valorizzare le foto e il video con il drone è a ridosso dell’alba o del tramonto.

In ogni caso occorre anche considerare che il drone è abbastanza rumoroso, ma trattandosi di un video aziendale da montare successivamente il rumore non dovrebbe rappresentare un problema rilevante.

Inoltre se piove o c’è forte vento il drone non potrà volare e quindi sarà necessario posticipare il lavoro delle riprese.

Se avete scadenze troppo strette sarebbe opportuno pianificare con largo anticipo le riprese aeree con il drone per evitare ad esempio giornate piovose consecutive e altri imprevisti.

DRONE E SICUREZZA

Da ultimo ricordate le regole sulla sicurezza.
Precisate con l’operatore del drone che vengano rispettate tutte le procedure definite dagli enti ufficiali nazionali ed europei, oltre che quelle derivate dal semplice buonsenso, e cioè:

- Che l’operatore del drone sia dotato di regolare attestato di pilota APR rilasciato da ENAC.
- Che vengano eseguiti decolli e atterraggi in spazi aperti e lontano dalle persone.
- Sorvolare il minor numero di persone possibile per la minor quantità di tempo.
- Pianificare le riprese in base ad orari e condizioni climatiche.
- La presenza di un osservatore vicino al pilota, che garantisca il costante contatto visivo con il drone.
- Utilizzare un drone di ultima generazione, con regolare manutenzione e con software aggiornato.

Photo Idea applica queste norme come standard operativi.`,
    heroImage:
      "/images/services/video-aziendale-drone/hero-video-aziendale-001.webp",
    galleryKey: "corporateVideo",
    serviceGalleryImages: [],
    ctaConfig: {
      title: "Vuoi informazioni?",
      text: "Contattaci per un video aziendale su misura per la tua realtà.",
      buttonLabel: "Chiedi informazioni",
      targetRoute: "/contatti",
      prefillSubject: "Richiesta informazioni servizio Video aziendale & drone",
    },
    packages: [],
    pricingPackages: [],
    limitedOffer: { enabled: false },
    instagram: null,
    portfolioLink: {
      label: "Guarda i video nel portfolio",
      sectionId: "corporate-video",
      url: "/portfolio/foto-corporate-video",
    },
    photobook: null,
    videos: [
      {
        id: "corporate-video-1",
        title: "Guarda dall'alto: Riprese Drone per il Tuo Business",
        youtubeURL: "https://www.youtube.com/watch?v=jkuZLEm8wgE&list=TLGGeAR4my_NvpYyNDExMjAyNQ", 
        description: "Scopri il potere delle riprese aeree con il nostro ultimo video! Con il nostro drone professionale, catturiamo angolazioni mozzafiato per valorizzare il tuo business. Dalle incantevoli vedute paesaggistiche agli ispezioni dettagliate dei tetti, offriamo soluzioni aeree su misura per le tue esigenze. Guarda dall'alto e preparati a essere sopraffatto dalla bellezza e dall'utilità di queste straordinarie prospettive! Iscriviti al nostro canale per non perdere i nostri futuri video e scopri come le riprese aeree possono fare la differenza per te.",
      },
    ],
    blogCategoryId: "video-aziendale-drone",
  },
];
