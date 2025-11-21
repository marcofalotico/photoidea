// src/pages/PortfolioDetailPage.jsx
// Pagina che mostra una galleria di immagini con:
// - slider Swiper in alto
// - griglia di thumbnail sotto
// - lightbox a schermo intero quando clicchi una thumbnail

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { portfolioCategories } from "../content/portfolio.js";
import { portfolioImages } from "../content/mediaPaths.js";

// Swiper per lo slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function PortfolioDetailPage() {
  const { slug } = useParams();
  const category = portfolioCategories.find((cat) => cat.slug === slug);

  // Stato locale per la lightbox:
  // - isOpen: se la lightbox è aperta
  // - photoIndex: indice dell'immagine attualmente visibile in lightbox
  const [isOpen, setIsOpen] = useState(false);
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
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const showNext = () => {
    setPhotoIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = () => {
    setPhotoIndex((prev) =>
      (prev + images.length - 1) % images.length
    );
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
            <Swiper
              loop={true}
              slidesPerView={1}
              className="portfolio-swiper"
            >
              {images.map((imgPath, index) => (
                <SwiperSlide key={imgPath + index}>
                  <div
                    className="ratio ratio-16x9 rounded overflow-hidden shadow-sm portfolio-slide"
                    onClick={() => openLightboxAt(index)}
                    style={{ cursor: "pointer" }}
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

        {/* Griglia thumbnail */}
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
                onClick={() => openLightboxAt(index)}
                style={{ cursor: "pointer" }}
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

      {/* Lightbox a schermo intero */}
      {isOpen && images.length > 0 && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={
            images[(photoIndex + images.length - 1) % images.length]
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={showPrev}
          onMoveNextRequest={showNext}
        />
      )}
    </section>
  );
}

export default PortfolioDetailPage;
