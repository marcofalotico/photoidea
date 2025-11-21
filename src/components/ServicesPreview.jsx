// src/components/ServicesPreview.jsx
// Sezione della home che mostra una anteprima dei servizi principali.
// - Legge l'array "services" dal file di contenuto
// - Mostra alcune card con titolo e descrizione breve
// - Ogni card linka alla pagina dettaglio del servizio

import React from "react";
import { Link } from "react-router-dom"; // per navigare verso /servizi/:slug
import { services } from "../content/services.js"; // array di servizi definito in content

function ServicesPreview() {
  // Potremmo anche limitare il numero dei servizi (es. i primi 3),
  // ma per ora li mostriamo tutti.
  return (
    <section className="py-5">
      <div className="container">
        {/* Titolo sezione */}
        <div className="mb-4 text-center">
          <h2 className="fw-bold">Servizi fotografici</h2>
          <p className="text-muted">
            Dai matrimoni alle sessioni maternità, scopri tutti i servizi dello
            studio.
          </p>
        </div>

        {/* Griglia Bootstrap con le card dei servizi */}
        <div className="row g-4">
          {services.map((service) => (
            // [Concetto React] In un .map su array, ogni elemento JSX deve avere una prop "key" univoca.
            // Qui usiamo service.id.
            <div className="col-md-4" key={service.id}>
              <div className="card h-100">
                {/* Immagine di copertina del servizio (se c'è) */}
                <div className="ratio ratio-4x3">
                  <img
                    src={service.heroImage}
                    alt={service.menuLabel}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h3 className="h5">{service.menuLabel}</h3>
                  <p className="text-muted flex-grow-1">
                    {service.shortDescription}
                  </p>
                  {/* Link alla pagina dettaglio "/servizi/:slug" */}
                  <Link
                    to={`/servizi/${service.slug}`}
                    className="btn btn-outline-dark mt-2"
                  >
                    Scopri di più
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
