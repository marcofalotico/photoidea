// src/pages/PortfolioDetailPage.jsx
// Pagina che mostra una galleria di immagini per una categoria di portfolio.
// - Legge :slug dall'URL (useParams)
// - Trova la categoria nell'array portfolioCategories
// - Usa mediaPaths.portfolioImages[galleryKey] per le immagini

import React from "react";
import { useParams } from "react-router-dom";
import { portfolioCategories } from "../content/portfolio.js";
import { portfolioImages } from "../content/mediaPaths.js";

function PortfolioDetailPage() {
  const { slug } = useParams(); // leggo lo slug dalla rotta "/portfolio/:slug"

  // Trovo la categoria che ha slug uguale al parametro
  const category = portfolioCategories.find((cat) => cat.slug === slug);

  if (!category) {
    // Caso categoria non trovata
    return (
      <section className="py-5">
        <div className="container">
          <h1 className="fw-bold">Categoria portfolio non trovata</h1>
          <p className="text-muted">
            La categoria che stai cercando non esiste o è stata rimossa.
          </p>
        </div>
      </section>
    );
  }

  // Recupero le immagini associate a questa categoria tramite galleryKey
  const images = portfolioImages[category.galleryKey] || [];

  return (
    <section className="py-5">
      <div className="container">
        <header className="mb-4">
          <h1 className="fw-bold">{category.menuLabel}</h1>
          <p className="text-muted">{category.description}</p>
        </header>

        {/* Griglia di immagini semplice (3 per riga su desktop) */}
        <div className="row g-3">
          {images.length === 0 && (
            <p className="text-muted">
              Nessuna immagine è ancora stata aggiunta per questa categoria.
            </p>
          )}

          {images.map((imgPath, index) => (
            <div className="col-sm-6 col-md-4" key={imgPath + index}>
              <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                <img
                  src={imgPath}
                  alt={`${category.menuLabel} ${index + 1}`}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioDetailPage;
