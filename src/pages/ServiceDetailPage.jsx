// src/pages/ServiceDetailPage.jsx
// Pagina di dettaglio di un singolo servizio (es. /servizi/matrimonio)
//
// Concetti chiave:
// - useParams: per leggere lo "slug" dall'URL
// - Redux: per salvare il servizio selezionato nel form contatti (evitando prop drilling)
// - useNavigate: per spostarsi programmaticamente verso /contatti

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { services } from "../content/services.js";
import { portfolioImages } from "../content/mediaPaths.js";
import { setContactService } from "../redux/actions.js";

function ServiceDetailPage() {
  // useParams ci restituisce i parametri dinamici dell'URL.
  // Nel route abbiamo definito qualcosa tipo "/servizi/:slug".
  // Qui leggiamo quel "slug" per capire quale servizio mostrare.
  const { slug } = useParams();

  // Troviamo il servizio corrispondente allo slug
  const service = services.find((srv) => srv.slug === slug);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Gestore clic sul bottone "Chiedi informazioni su questo servizio"
  const handleContactClick = () => {
    if (!service) return;

    // 1) Salviamo in Redux il nome del servizio
    dispatch(setContactService(service.menuLabel));
    // 2) Navighiamo a /contatti
    navigate("/contatti");
  };

  if (!service) {
    // Caso slug inesistente
    return (
      <section className="py-5">
        <div className="container">
          <h1 className="fw-bold">Servizio non trovato</h1>
          <p className="text-muted">
            Il servizio che stai cercando non esiste o è stato rimosso.
          </p>
        </div>
      </section>
    );
  }

  // Recuperiamo eventuali immagini di galleria legate a questo servizio,
  // usando la chiave definita in services.galleryKey
  const galleryImages =
    portfolioImages[service.galleryKey] || [];

  return (
    <section className="py-5">
      <div className="container">
        {/* Titolo + descrizione breve */}
        <header className="row g-4 mb-4 align-items-start">
          <div className="col-md-7">
            <h1 className="fw-bold mb-3">
              {service.menuLabel}
            </h1>
            <p className="lead text-muted">
              {service.shortDescription}
            </p>

            {/* Bottone che porta a Contatti con il servizio precompilato */}
            <button
              type="button"
              className="btn btn-dark mt-3"
              onClick={handleContactClick}
            >
              Chiedi informazioni su {service.menuLabel}
            </button>
          </div>

          {/* Immagine hero del servizio */}
          <div className="col-md-5">
            <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
              <img
                src={service.heroImage}
                alt={service.menuLabel}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </header>

        {/* Testo di dettaglio */}
        <div className="row g-4">
          <div className="col-md-8">
            <h2 className="h4 fw-bold mb-3">
              Il servizio in dettaglio
            </h2>
            <p className="text-muted">
              {service.fullDescription}
            </p>
          </div>

          {/* Box laterale con "Vuoi informazioni?" (opzionale) */}
          <div className="col-md-4">
            <div className="border rounded p-3 bg-light">
              <h3 className="h6 fw-bold mb-2">
                Vuoi informazioni?
              </h3>
              <p className="small text-muted">
                Contattaci per avere un preventivo personalizzato
                per il servizio <strong>{service.menuLabel}</strong>.
              </p>
              <button
                type="button"
                className="btn btn-outline-dark btn-sm"
                onClick={handleContactClick}
              >
                Vai al form contatti
              </button>
            </div>
          </div>
        </div>

        {/* Galleria immagini (se presenti) */}
        {galleryImages.length > 0 && (
          <div className="mt-5">
            <h2 className="h4 fw-bold mb-3">
              Alcuni scatti
            </h2>
            <div className="row g-3">
              {galleryImages.map((imgPath, index) => (
                <div
                  className="col-sm-6 col-md-4"
                  key={imgPath + index}
                >
                  <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                    <img
                      src={imgPath}
                      alt={`${service.menuLabel} ${index + 1}`}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ServiceDetailPage;
