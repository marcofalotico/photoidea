// src/content/services.js
// Definizione dei servizi principali dello studio.
//
// NOTA SLUG:
//  - Qui lo slug è SOLO l'ultima parte dell'URL (es. "matrimonio").
//  - In React Router useremo percorsi del tipo "/servizi/:slug".
//  - Nel codice useremo Link verso `/servizi/${service.slug}`.

export const services = [
  {
    id: "matrimonio",
    menuLabel: "Matrimonio",
    slug: "matrimonio", // <= SOLO la parte finale dell'URL
    shortDescription: `
      TODO: descrizione breve del servizio matrimonio (2–3 righe).
    `,
    fullDescription: `
      TODO: testo completo della pagina Matrimonio. 
    `,
    heroImage: "images/services/matrimonio/hero-matrimonio-001.jpg",
    galleryKey: "weddingMain",
  },
  {
    id: "maternita",
    menuLabel: "Maternità",
    slug: "maternita",
    shortDescription: `
      TODO: descrizione breve del servizio maternità.
    `,
    fullDescription: `
      TODO: testo completo pagina Maternità.
    `,
    heroImage: "images/services/maternita/hero-maternita-001.jpg",
    galleryKey: "maternityMain",
  },
  {
    id: "bambini-smashcake",
    menuLabel: "Bambini e Smash Cake",
    slug: "bambini-smashcake",
    shortDescription: `
      TODO: descrizione breve servizio bambini & smash cake.
    `,
    fullDescription: `
      TODO: testo completo pagina Bambini & Smash Cake.
    `,
    heroImage: "images/services/bambini-smashcake/hero-bambini-001.jpg",
    galleryKey: "kidsSmashCake",
  },
  {
    id: "battesimo",
    menuLabel: "Battesimo",
    slug: "battesimo",
    shortDescription: `
      TODO: descrizione breve servizio Battesimo.
    `,
    fullDescription: `
      TODO: testo completo pagina Battesimo.
    `,
    heroImage: "images/services/battesimo/hero-battesimo-001.jpg",
    galleryKey: "baptismMain",
  },
  {
    id: "video-nozze-drone",
    menuLabel: "Video nozze e drone",
    slug: "video-nozze-drone",
    shortDescription: `
      TODO: descrizione breve servizio video nozze & drone.
    `,
    fullDescription: `
      TODO: testo completo pagina Video nozze & drone.
    `,
    heroImage: "images/services/video-nozze-drone/hero-video-nozze-001.jpg",
    galleryKey: "weddingVideo",
  },
  {
    id: "video-aziendale-drone",
    menuLabel: "Video aziendale e drone",
    slug: "video-aziendale-drone",
    shortDescription: `
      TODO: descrizione breve servizio video aziendale & drone.
    `,
    fullDescription: `
      TODO: testo completo pagina Video aziendale & drone.
    `,
    heroImage: "images/services/video-aziendale-drone/hero-video-aziendale-001.jpg",
    galleryKey: "corporateVideo",
  },
];
