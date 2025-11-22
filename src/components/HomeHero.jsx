// src/components/HomeHero.jsx
// Hero full-width con slider Swiper e overlay centrale.
// Qui usiamo solo stato "presentazionale", quindi nessun useState/useEffect:
// il componente è una "presentational component" puro.

import React from "react";
import { Link } from "react-router-dom";
import { studioHero } from "../content/studioInfo.js";
import { heroImages } from "../content/mediaPaths.js";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Modulo autoplay di Swiper (necessario per far partire lo slider in automatico)
import { Autoplay } from "swiper/modules";

// CSS base di Swiper
import "swiper/css";

function HomeHero() {
  return (
    <section className="hero-section position-relative">
      {/* Slider a piena larghezza/altezza */}
      <Swiper
        className="hero-swiper"
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={0}
      >
        {heroImages.homeWeddingSlider.map((imgPath, index) => (
          <SwiperSlide key={imgPath + index}>
            {/* Ogni slide occupa tutta l'altezza della hero */}
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

      {/* Overlay con testo centro pagina.
          Lo lasciamo come blocco separato ma lo renderemo assoluto via CSS. */}
      <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center">
        <div className="hero-text">
          {/* Titolo grande come nello screenshot */}
          <p className="hero-eyebrow text-uppercase mb-2">
            {studioHero.kicker || "Wedding Album"}
          </p>

          <h1 className="hero-title mb-3">
            {/* Puoi personalizzare questo testo per avvicinarti allo stile originale */}
            Catturiamo i ricordi
          </h1>

          <p className="hero-subtitle mb-4">
            i momenti che contano sono quelli vissuti con amore
          </p>

          <Link to="/contatti" className="btn btn-hero-cta">
            CHIEDI INFORMAZIONI
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
