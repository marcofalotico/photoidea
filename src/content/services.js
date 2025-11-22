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
    shortDescription: `
      Benvenuti nel nostro mondo di fotografia matrimoniale, dove ogni scatto racconta
      la vostra storia d’amore in modo autentico e spontaneo.
    `,
    fullDescription: `
      Per noi, la fotografia di matrimonio è molto più di semplici immagini.
      È un racconto affettuoso, un reportage che cattura le emozioni e i momenti speciali
      del vostro giorno più importante.

      Dalla preparazione al ricevimento, ci impegniamo a documentare ogni dettaglio
      senza interferire con il flusso naturale degli eventi. Con la presenza di due
      fotografi professionisti inclusi nel servizio, garantiamo una copertura completa
      e senza interruzioni.

      Offriamo flessibilità con una vasta gamma di opzioni, dal solo servizio fotografico
      alla realizzazione di fotolibri stampati di alta qualità. Il vostro matrimonio è unico
      e vogliamo che le vostre fotografie lo riflettano pienamente.
    `,
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
        id: "matrimonio-basic",
        name: "Matrimonio Classic",
        priceLabel: "a partire da 1.200 €",
        shortDescription:
          "Copertura fotografica dalla preparazione degli sposi al taglio della torta.",
        features: [
          "2 fotografi professionisti",
          "Consegna di selezione immagini in alta risoluzione",
          "Galleria online privata per condividere le foto",
        ],
        ctaLabel: "Info pacchetto Classic",
        ctaSubject: "Info pacchetto Matrimonio Classic",
      },
      {
        id: "matrimonio-plus",
        name: "Matrimonio Plus",
        priceLabel: "a partire da 1.600 €",
        shortDescription:
          "Servizio completo con album fotografico artigianale incluso.",
        features: [
          "Tutti i servizi del pacchetto Classic",
          "Album fotografico 30x30 con cofanetto",
          "Sessione di coppia pre-wedding inclusa",
        ],
        ctaLabel: "Info pacchetto Plus",
        ctaSubject: "Info pacchetto Matrimonio Plus",
      },
      {
        id: "matrimonio-lux",
        name: "Matrimonio Lux",
        priceLabel: "su preventivo",
        shortDescription:
          "Per chi desidera un racconto ancora più completo, con servizi foto e video.",
        features: [
          "Copertura foto + video con team dedicato",
          "Album per gli sposi e mini-album per i genitori",
          "Servizi aggiuntivi personalizzabili (drone, welcome party, day-after…)",
        ],
        ctaLabel: "Info pacchetto Lux",
        ctaSubject: "Info pacchetto Matrimonio Lux",
      },
    ],

    // 7. Banner per eventuale offerta a tempo limitato
    limitedOffer: {
      enabled: true,
      title: "Offerta limitata matrimonio 2026",
      message:
        "Per le coppie che confermano entro fine mese, upgrade gratuito dall’album Classic all’album Plus.",
      badgeLabel: "Promo",
      expiryText: "Offerta valida per matrimoni 2025–2026 fino al 31/12.",
    },

    // 8. Integrazione al profilo Instagram
    instagram: {
      username: "photoidea.torino",
      profileUrl: "https://www.instagram.com/photoidea.torino/",
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
      title: "Fotolibro Matrimonio",
      subtitle: "Un album pensato per custodire il vostro racconto",
      description: `
        Progettiamo insieme a voi il fotolibro del matrimonio, curando layout,
        scelta delle immagini e materiali di copertina. Ogni album è unico
        e viene stampato su carte di alta qualità.
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
        youtubeId: "YOUTUBE_ID_1", // TODO: sostituisci con id reale
        thumbnail: "/images/services/matrimonio/video-thumb-001.jpg",
        description: "Un breve trailer che racconta l’emozione del vostro giorno.",
      },
      {
        id: "matrimonio-video-2",
        title: "Wedding story in città",
        youtubeId: "YOUTUBE_ID_2",
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
    slug: "maternita",
    seoSubtitle:
      "Servizi fotografici maternità in studio e in esterna a Torino.",
    shortDescription: `
      TODO: descrizione breve del servizio maternità.
    `,
    fullDescription: `
      TODO: testo completo pagina Maternità.
    `,
    heroImage: "/images/services/maternita/hero-maternita-001.jpg",
    galleryKey: "maternityMain",
    serviceGalleryImages: [
      "/images/services/maternita/hero-maternita-001.jpg",
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
    pricingPackages: [],
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
    slug: "bambini-smashcake",
    seoSubtitle:
      "Servizio fotografico bambini e smash cake in studio a Torino.",
    shortDescription: `
      TODO: descrizione breve servizio bambini & smash cake.
    `,
    fullDescription: `
      TODO: testo completo pagina Bambini & Smash Cake.
    `,
    heroImage: "/images/services/bambini-smashcake/hero-bambini-001.jpg",
    galleryKey: "kidsSmashCake",
    serviceGalleryImages: [
      "/images/services/bambini-smashcake/hero-bambini-001.jpg",
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
    slug: "battesimo",
    seoSubtitle: "Servizio fotografico battesimo per cerimonie intime e familiari.",
    shortDescription: `
      TODO: descrizione breve servizio Battesimo.
    `,
    fullDescription: `
      TODO: testo completo pagina Battesimo.
    `,
    heroImage: "/images/services/battesimo/hero-battesimo-001.jpg",
    galleryKey: "baptismMain",
    serviceGalleryImages: [
      "/images/services/battesimo/hero-battesimo-001.jpg",
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
    slug: "video-nozze-drone",
    seoSubtitle:
      "Video di matrimonio e riprese con drone per raccontare il tuo giorno da un’altra prospettiva.",
    shortDescription: `
      TODO: descrizione breve servizio video nozze & drone.
    `,
    fullDescription: `
      TODO: testo completo pagina Video nozze & drone.
    `,
    heroImage: "/images/services/video-nozze-drone/hero-video-nozze-001.jpg",
    galleryKey: "weddingVideo",
    serviceGalleryImages: [
      "/images/services/video-nozze-drone/hero-video-nozze-001.jpg",
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
      label: "Guarda i video nel portfolio Matrimonio",
      sectionId: "matrimonio-video",
      url: "/portfolio/foto-matrimonio-video",
    },
    photobook: null,
    videos: [],
    blogCategoryId: "video-nozze-drone",
  },
  {
    id: "video-aziendale-drone",
    menuLabel: "Video aziendale e drone",
    slug: "video-aziendale-drone",
    seoSubtitle:
      "Produzione video aziendali e riprese con drone per valorizzare il tuo brand.",
    shortDescription: `
      TODO: descrizione breve servizio video aziendale & drone.
    `,
    fullDescription: `
      TODO: testo completo pagina Video aziendale & drone.
    `,
    heroImage:
      "/images/services/video-aziendale-drone/hero-video-aziendale-001.jpg",
    galleryKey: "corporateVideo",
    serviceGalleryImages: [
      "/images/services/video-aziendale-drone/hero-video-aziendale-001.jpg",
    ],
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
      label: "Guarda i video nel portfolio Aziendale",
      sectionId: "corporate-video",
      url: "/portfolio/foto-corporate-video",
    },
    photobook: null,
    videos: [],
    blogCategoryId: "video-aziendale-drone",
  },
];
