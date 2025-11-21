// src/components/HomeHero.jsx
// Questo componente rappresenta la HERO della home:
// - mostra un'immagine principale (per ora una sola, non slider)
// - mostra titolo e sottotitolo dello studio
// - mostra un bottone "Chiedi informazioni"

import React from "react"; // import di React necessario per definire componenti funzione
import { Link } from "react-router-dom"; // Link di React Router per navigazione interna
import { studioHero } from "../content/studioInfo.js"; // dati testuali per la hero
import { heroImages } from "../content/mediaPaths.js"; // path immagine/i hero

function HomeHero() {
  // [Concetto React] Un componente funzione è una normale funzione JS che:
  // - può ricevere props (qui non le usiamo)
  // - restituisce JSX (la UI da mostrare)
  const mainHeroImage = heroImages.homeWeddingSlider[0]; // prendo la prima immagine dallo slider

  return (
    <section className="bg-light py-5 border-bottom">
      <div className="container">
        <div className="row align-items-center">
          {/* Colonna testo */}
          <div className="col-md-6">
            {/* Title e subtitle presi dal file di contenuto */}
            <h1 className="display-5 fw-bold mb-3">{studioHero.title}</h1>
            <p className="lead mb-3">{studioHero.subtitle}</p>
            <p className="mb-4">{studioHero.introText}</p>

            {/* Link a /contatti come call-to-action */}
            <Link className="btn btn-dark btn-lg" to="/contatti">
              Chiedi informazioni
            </Link>
          </div>

          {/* Colonna immagine */}
          <div className="col-md-6 mt-4 mt-md-0">
            {/* Per ora immagine statica, poi potremo sostituire con slider */}
            <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
              <img
                src={mainHeroImage}
                alt="Foto di matrimonio - Hero"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero; // export default per usare <HomeHero /> in altri file
