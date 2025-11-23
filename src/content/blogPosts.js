// src/content/blogPosts.js
// Modello dati per i post del blog.
//
// Campi principali:
// - id: identifica la categoria/servizio collegato (es. "matrimonio")
// - slug: parte finale dell'URL (es. "un-matrimonio-da-favola-a-piobesi")
// - title, excerpt: titolo e anteprima
// - coverImage: immagine principale
// - galleryImages: elenco di immagini aggiuntive (per carosello / lightbox)
// - content: testo completo (stringa lunga, anche multi-linea)
// - publishedAt: data pubblicazione (ISO string "YYYY-MM-DD")

export const blogPosts = [
  {
    id: "matrimonio", // collega questo post al servizio "matrimonio"
    slug: "un-matrimonio-da-favola-a-piobesi",
    title: "Un matrimonio da favola a Piobesi",
    excerpt:
      "Una giornata romantica tra colline e vigneti, con una coppia innamorata e una luce perfetta.",
    coverImage:
      "/images/blog/piobesi-tenuta-carretta/rossella-simone-tenuta-carretta-cover.webp",
    galleryImages: [
      "/images/blog/piobesi-tenuta-carretta/rossella-simone-tenuta-carretta-001.webp",
      "/images/blog/piobesi-tenuta-carretta/rossella-simone-tenuta-carretta-002.webp",
      "/images/blog/piobesi-tenuta-carretta/rossella-simone-tenuta-carretta-003.webp",
      // aggiungi quante immagini vuoi
    ],
    content: `
      Domenica scorsa ho avuto il piacere di fotografare il matrimonio di Rossella e Simone, una giornata indimenticabile che si è svolta nella splendida cornice della Tenuta Carretta, a Piobesi d’Alba, in provincia di Cuneo. La location, immersa tra i vigneti delle dolci colline piemontesi, ha regalato un’atmosfera magica, resa ancor più speciale dalla luce del sole.

Dalla cerimonia emozionante all’aperto, al rinfresco elegante e ai balli sfrenati che hanno chiuso la serata, ogni dettaglio è stato perfetto. Qui sotto trovate alcuni scatti che catturano i momenti più belli di questa giornata speciale, dai sorrisi degli sposi agli abbracci degli amici e parenti.
    `,
    publishedAt: "2025-01-10",
  },
  {
    id: "matrimonio", // stesso servizio: useremo questo id per filtrare da ServiceDetailPage
    slug: "matrimonio-elisa-alessandro-podere-la-piazza",
    title:
      "Un’Elegante Favola tra le Colline: Il Matrimonio di Elisa & Alessandro al Podere La Piazza",
    excerpt: `
      Benvenuti nel cuore delle verdi colline dell’Astigiano, dove l’amore è stato celebrato in un’atmosfera di magia e romanticismo.
    `,
    coverImage:
      "/images/blog/elisa-alessandro-podere-la-piazza/elisa-alessandro-podere-la-piazza-cover.webp",
    galleryImages: [
      "/images/blog/elisa-alessandro-podere-la-piazza/elisa-alessandro-001.webp",
      "/images/blog/elisa-alessandro-podere-la-piazza/elisa-alessandro-002.webp",
      "/images/blog/elisa-alessandro-podere-la-piazza/elisa-alessandro-003.webp",
      "/images/blog/elisa-alessandro-podere-la-piazza/elisa-alessandro-004.webp",
      "/images/blog/elisa-alessandro-podere-la-piazza/elisa-alessandro-005.webp",
      "/images/blog/elisa-alessandro-podere-la-piazza/elisa-alessandro-006.webp",
    ],
    content: `Il matrimonio di Elisa e Alessandro, celebrato il 21 novembre 2023, è stato un evento indimenticabile che ha lasciato un’impronta indelebile nei cuori di tutti coloro che vi hanno partecipato.
    
Il suggestivo scenario del Podere La Piazza a Costigliole d’Asti ha fornito lo sfondo perfetto per questo giorno così speciale. Tra i vigneti e le verdi distese di campi, Elisa e Alessandro hanno scambiato i loro voti, suggellando il loro amore in una cerimonia che ha riflettuto la bellezza della natura circostante e l’intensità dei loro sentimenti.

Ma l’amore di Elisa e Alessandro ha abbracciato anche la città, con una toccante cerimonia presso la Parrocchia di Beato Pier Giorgio Frassati di Torino. Qui, circondati dall’affetto dei loro cari, hanno pronunciato il sacro “sì” di fronte a Dio e alla comunità, segnando l’inizio di un viaggio insieme, fatto di gioie, sfide e condivisione.

Le immagini catturate durante questo giorno straordinario raccontano una storia di pura felicità e commozione. Dai sorrisi radiosi degli sposi alle lacrime di gioia degli ospiti, ogni istante è stato intriso di emozioni autentiche e sincere.

Le fotografie del matrimonio, scattate nella chiesa Beato Pier Giorgio Frassati di Torino, sono un tributo alla bellezza della semplicità e alla forza dell’amore. I momenti condivisi, gli sguardi complici e i gesti dolci sono stati catturati per l’eternità, testimonianza tangibile di un legame che crescerà e si rafforzerà nel tempo.

Lasciatevi trasportare in questo viaggio attraverso le emozioni e la bellezza di un matrimonio senza tempo. Le fotografie di Elisa e Alessandro raccontano una storia di amore puro e autentico, unendo le atmosfere incantevoli della campagna astigiana con il calore e la spiritualità della città di Torino.

Che questa storia possa ispirare e portare gioia a coloro che la leggeranno, celebrando l’amore e la bellezza della vita condivisa.

Milena
    `,
    publishedAt: "2024-03-01",
  },
  {
    id: "matrimonio",
    slug: "matrimonio-accademia-scienze-dolce-stil-novo-venaria",
    title:
      "Un Matrimonio Incantevole: Sposi all’Accademia delle Scienze di Torino e Ricevimento al Dolce Stil Novo alla Reggia di Venaria",
    excerpt: `
      TODO: scrivi un estratto che riassuma location, atmosfera, stile fotografico.
    `,
    coverImage:
      "/images/blog/accademia-scienze-dolce-stil-novo/accademia-scienze-dolce-stil-novo-cover.jpg",
    galleryImages: [
      "/images/blog/accademia-scienze-dolce-stil-novo/accademia-scienze-001.jpg",
      "/images/blog/accademia-scienze-dolce-stil-novo/accademia-scienze-002.jpg",
      "/images/blog/accademia-scienze-dolce-stil-novo/accademia-scienze-003.jpg",
    ],
    content: `
      TODO: articolo completo riscritto da te.
    `,
    publishedAt: "2023-07-28",
  },
];
