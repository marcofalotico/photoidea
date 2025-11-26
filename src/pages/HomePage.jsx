// src/pages/HomePage.jsx
// Questa è la pagina Home principale.
// Componiamo qui:
// - HomeHero
// - ServicesPreview
// - BlogPreview
// - TestimonialsSection
//
// NOTA: HomePage è un normale componente React che viene usato
//       nella Route path="/" in App.jsx.

import React from "react"; // necessario per definire il componente

// Importiamo i componenti che abbiamo appena creato
import HomeHero from "../components/HomeHero.jsx";
import ServicesPreview from "../components/ServicesPreview.jsx";
import BlogPreview from "../components/BlogPreview.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import GoogleReviewsSection from "../components/GoogleReviewsSection.jsx";

function HomePage() {
  // [Concetto React] Non ci serve stato locale qui: HomePage è solo composizione.
  // Eventuale logica (fetch, effetti, ecc.) la potremmo aggiungere in futuro.
  return (
    <div>
      <HomeHero />
      <ServicesPreview />
      <BlogPreview />
      {/* <TestimonialsSection /> */}
      <GoogleReviewsSection />
      {/* In futuro: sezione video, embed Instagram, ecc. */}
    </div>
  );
}

export default HomePage;
