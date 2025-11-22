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
      TODO: scrivi tu il riassunto del post.
    `,
    coverImage:
      "/images/blog/elisa-alessandro-podere-la-piazza/elisa-alessandro-podere-la-piazza-cover.jpg",
    galleryImages: [
      "/images/blog/elisa-alessandro-podere-la-piazza/elisa-alessandro-001.jpg",
      "/images/blog/elisa-alessandro-podere-la-piazza/elisa-alessandro-002.jpg",
      "/images/blog/elisa-alessandro-podere-la-piazza/elisa-alessandro-003.jpg",
    ],
    content: `
      TODO: testo completo articolo riscritto.
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
