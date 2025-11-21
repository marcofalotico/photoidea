// src/pages/PortfolioDetailPage.jsx
// Pagina che mostra una galleria di immagini con:
// - slider Swiper in alto
// - griglia di thumbnail
// - lightbox a schermo intero con "yet-another-react-lightbox"

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { portfolioCategories } from "../content/portfolio.js";
import { portfolioImages } from "../content/mediaPaths.js";

// Slider Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Lightbox compatibile con React 18/19
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function PortfolioDetailPage() {
  const { slug } = useParams();

  // Trovo la categoria a partire dallo slug
  const category = portfolioCategories.find((cat) => cat.slug === slug);

  // Stato locale per aprire/chiudere la lightbox
  const [isOpen, setIsOpen] = useState(false);
  // Indice dell'immagine attualmente selezionata
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!category) {
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

  const images = portfolioImages[category.galleryKey] || [];

  const openLightboxAt = (index) => {
    setPhotoIndex(index); // setto l'indice dell'immagine cliccata
    setIsOpen(true);      // apro la lightbox
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <section className="py-5">
      <div className="container">
        <header className="mb-4 text-center">
          <h1 className="fw-bold">{category.menuLabel}</h1>
          <p className="text-muted">{category.description}</p>
        </header>

        {/* Slider principale */}
        {images.length > 0 && (
          <div className="mb-4">
            <Swiper loop={true} slidesPerView={1} className="portfolio-swiper">
              {images.map((imgPath, index) => (
                <SwiperSlide key={imgPath + index}>
                  <div
                    className="ratio ratio-16x9 rounded overflow-hidden shadow-sm portfolio-slide"
                    style={{ cursor: "pointer" }}
                    // Cliccando sullo slide apro la lightbox a quell'indice
                    onClick={() => openLightboxAt(index)}
                  >
                    <img
                      src={imgPath}
                      alt={`${category.menuLabel} ${index + 1}`}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Griglia di thumbnail */}
        <div className="row g-3">
          {images.length === 0 && (
            <p className="text-muted">
              Nessuna immagine è ancora stata aggiunta per questa categoria.
            </p>
          )}

          {images.map((imgPath, index) => (
            <div className="col-sm-6 col-md-4" key={imgPath + index}>
              <div
                className="ratio ratio-4x3 rounded overflow-hidden shadow-sm portfolio-thumb"
                style={{ cursor: "pointer" }}
                onClick={() => openLightboxAt(index)}
              >
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

      {/* Lightbox */}
      {isOpen && images.length > 0 && (
        <Lightbox
          // open/close controllati da stato React
          open={isOpen}
          close={closeLightbox}
          // slides è un array di oggetti { src: "path/dell/immagine" }
          slides={images.map((src) => ({ src }))}
          // index è l'immagine attualmente attiva
          index={photoIndex}
          // on.view viene chiamato quando l'utente cambia slide (freccia, swipe, ecc.)
          on={{
            view: ({ index }) => setPhotoIndex(index),
          }}
        />
      )}
    </section>
  );
}

export default PortfolioDetailPage;
