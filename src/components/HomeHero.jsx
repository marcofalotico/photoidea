// src/components/HomeHero.jsx
// Hero full-width con slider di immagini usando Swiper.
// L'overlay centrale contiene titolo, sottotitolo e bottone CTA.

import React from "react";
import { Link } from "react-router-dom";
import { studioHero } from "../content/studioInfo.js";
import { heroImages } from "../content/mediaPaths.js";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import CSS base di Swiper
import "swiper/css";

// (In futuro possiamo importare effetti aggiuntivi, frecce, pagination, ecc.)

function HomeHero() {
  return (
    <section className="hero-section position-relative">
      {/* Slider a piena larghezza/altezza */}
      <Swiper
        className="hero-swiper"
        // props base: loop infinito e autoplay semplice (in futuro possiamo raffinarlI)
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // slidesPerView = 1: una slide per volta
        slidesPerView={1}
      >
        {heroImages.homeWeddingSlider.map((imgPath, index) => (
          <SwiperSlide key={imgPath + index}>
            <div className="hero-slide">
              <img
                src={imgPath}
                alt={`Foto hero ${index + 1}`}
                className="hero-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay con testo centro pagina */}
      <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center text-white">
        <div className="hero-text">
          {/* Titolo grande come nello screenshot */}
          <h1 className="hero-title">
            {/* Puoi personalizzare questo testo per avvicinarti allo stile originale */}
            Catturiamo i Ricordi
          </h1>
          <p className="hero-subtitle">
            i momenti che contano sono quelli vissuti con amore
          </p>
          <Link to="/contatti" className="btn btn-hero-cta mt-3">
            CHIEDI INFORMAZIONI
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
