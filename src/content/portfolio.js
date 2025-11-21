// src/content/portfolio.js
// Sezioni del portfolio (usate sia nel menu che nelle pagine dedicate).
//
// SLUG: solo l'ultima parte (es. "foto-matrimonio").
// Rotta React Router: "/portfolio/:slug".

export const portfolioCategories = [
  {
    id: "foto-prematrimoniale",
    menuLabel: "Foto prematrimoniale",
    slug: "foto-prematrimoniale",
    galleryKey: "weddingEngagement",
    description: `
      TODO: breve testo introduttivo per la pagina foto prematrimoniale.
    `,
  },
  {
    id: "foto-matrimonio",
    menuLabel: "Foto matrimonio",
    slug: "foto-matrimonio",
    galleryKey: "weddingMain",
    description: `
      TODO: breve testo introduttivo per la pagina foto matrimonio.
    `,
  },
  {
    id: "foto-maternita",
    menuLabel: "Foto maternità",
    slug: "foto-maternita",
    galleryKey: "maternityMain",
    description: `
      TODO: breve testo introduttivo per la pagina foto maternità.
    `,
  },
  {
    id: "foto-battesimo",
    menuLabel: "Foto Battesimo",
    slug: "foto-battesimo",
    galleryKey: "baptismMain",
    description: `
      TODO: breve testo introduttivo per la pagina foto Battesimo.
    `,
  },
  {
    id: "foto-bambini",
    menuLabel: "Foto bambini",
    slug: "foto-bambini",
    galleryKey: "kidsMain",
    description: `
      TODO: breve testo introduttivo per la pagina foto bambini.
    `,
  },
  {
    id: "foto-corporate",
    menuLabel: "Foto corporate",
    slug: "foto-corporate",
    galleryKey: "corporateMain",
    description: `
      TODO: breve testo introduttivo per la pagina foto corporate.
    `,
  },
  {
    id: "foto-natale",
    menuLabel: "Foto di Natale",
    slug: "foto-natale",
    galleryKey: "christmasMain",
    description: `
      TODO: breve testo introduttivo per la pagina foto di Natale.
    `,
  },
];
