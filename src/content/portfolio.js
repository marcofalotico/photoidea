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
    description: `Il portfolio delle foto prematrimoniali cattura l'amore e la complicità della coppia in un contesto naturale e rilassato, creando ricordi autentici prima del grande giorno.`,
  },
  {
    id: "foto-matrimonio",
    menuLabel: "Foto matrimonio",
    slug: "foto-matrimonio",
    galleryKey: "weddingMain",
    description: `Il portfolio delle foto di matrimonio racconta la storia unica di ogni coppia, catturando i momenti più emozionanti e i dettagli speciali del loro giorno indimenticabile.`,
  },
  {
    id: "foto-maternita",
    menuLabel: "Foto maternità",
    slug: "foto-maternita",
    galleryKey: "maternityMain",
    description: `Benvenuta nel mondo della maternità, un viaggio straordinario fatto di emozioni, trasformazioni e amore incondizionato.`,
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
    galleryKey: "kidsSmashCake",
    description: `La fotografia di neonati è un‘esperienza delicata e unica che cattura i primi momenti di vita entro i quindici giorni del bambino. Le pose sono naturali, mirando a riflettere i movimenti spontanei che caratterizzano i primi giorni di vita del piccolo.`,
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
