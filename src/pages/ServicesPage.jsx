// src/pages/ServicesPage.jsx
// Pagina che elenca tutti i servizi, simile alla sezione "Servizi" del sito.
// Qui usiamo React Redux per leggere dallo store il servizio selezionato,
// giusto per mostrarti useSelector in un contesto reale.

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // hook di React Redux per leggere dallo store
import { services } from "../content/services.js";

function ServicesPage() {
  // [Redux] useSelector permette al componente di "abbonarsi" allo store.
  // Passiamo una funzione che riceve lo stato completo e restituisce la parte che ci interessa.
  // In questo caso vogliamo sapere quale servizio è selezionato.
  const selectedServiceId = useSelector(
    (state) => state.selectedServiceId // deve corrispondere alla chiave nello stato iniziale del reducer
  );

  return (
    <section className="py-5">
      <div className="container">
        <header className="mb-4 text-center">
          <h1 className="fw-bold">Servizi fotografici</h1>
          <p className="text-muted">
            Scopri tutti i servizi offerti dallo studio: matrimoni, maternità,
            bambini, battesimi, video e molto altro.
          </p>
        </header>

        <div className="row g-4">
          {services.map((service) => {
            // [Logica UI] Verifichiamo se questo servizio è quello attualmente selezionato nello store
            const isSelected = service.id === selectedServiceId;

            return (
              <div className="col-md-4" key={service.id}>
                {/* Applichiamo una classe speciale se è selezionato */}
                <div
                  className={
                    "card h-100" + (isSelected ? " border-dark shadow" : "")
                  }
                >
                  <div className="ratio ratio-4x3">
                    <img
                      src={service.heroImage}
                      alt={service.menuLabel}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h2 className="h5">{service.menuLabel}</h2>
                    <p className="text-muted flex-grow-1">
                      {service.shortDescription}
                    </p>
                    {/* Link alla pagina dettagli del servizio */}
                    <Link
                      to={`/servizi/${service.slug}`}
                      className="btn btn-outline-dark mt-2"
                    >
                      Vai al servizio
                    </Link>
                    {isSelected && (
                      <p className="mt-2 small text-success">
                        Servizio attualmente selezionato.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
