// src/pages/PortfolioDetailPage.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { portfolioCategories } from "../content/portfolio.js";
import { portfolioImages } from "../content/mediaPaths.js";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function PortfolioDetailPage() {
  const { slug } = useParams();

  const category = portfolioCategories.find((cat) => cat.slug === slug);

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Scroll to top quando apro una nuova pagina
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!category) {
    return (
      <section className="py-5">
        <div className="container">
          <h1 className="fw-bold">Categoria portfolio non trovata</h1>
          <p className="text-muted">La categoria che cerchi non esiste.</p>
        </div>
      </section>
    );
  }

  const images = portfolioImages[category.galleryKey] || [];

  const openLightboxAt = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* TITLE */}
        <header className="mb-4 text-center">
          <h1 className="fw-bold">{category.menuLabel}</h1>
          <p className="text-muted">{category.description}</p>
        </header>

        {/* PINTEREST GRID */}
        <div
          className="masonry"
          style={{
            columnCount: 3,
            columnGap: "1rem",
          }}
        >
          {images.map((src, index) => (
            <div
              key={src}
              style={{
                breakInside: "avoid",
                marginBottom: "1rem",
                cursor: "pointer",
              }}
              onClick={() => openLightboxAt(index)}
            >
              <img
                src={src}
                alt={`${category.menuLabel} ${index + 1}`}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  display: "block",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                }}
              />
            </div>
          ))}
        </div>

        {/* RESPONSIVE BREAKPOINTS */}
        <style>{`
          @media (max-width: 992px) {
            .masonry { column-count: 2; }
          }
          @media (max-width: 576px) {
            .masonry { column-count: 1; }
          }
        `}</style>
      </div>

      {/* LIGHTBOX */}
      {isOpen && images.length > 0 && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={photoIndex}
          on={{
            view: ({ index }) => setPhotoIndex(index),
          }}
        />
      )}
    </section>
  );
}

export default PortfolioDetailPage;
