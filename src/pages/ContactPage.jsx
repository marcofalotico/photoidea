// src/pages/ContactPage.jsx
// Pagina contatti con:
// - Dati di contatto dello studio
// - Un form di richiesta informazioni (non ancora collegato a backend)

import React from "react";
import { contactInfo } from "../content/contactInfo.js";

function ContactPage() {
  return (
    <section className="py-5">
      <div className="container">
        <header className="mb-4 text-center">
          <h1 className="fw-bold">Contatti</h1>
          <p className="text-muted">
            Scrivici per informazioni su servizi, disponibilità e preventivi.
          </p>
        </header>

        <div className="row g-4">
          {/* Colonna info studio */}
          <div className="col-md-4">
            <div className="border rounded p-3 bg-light h-100">
              <h2 className="h5 fw-bold mb-3">Studio fotografico</h2>
              <p className="mb-1">{contactInfo.address}</p>
              <p className="mb-3">{contactInfo.city}</p>
              <p className="mb-1">
                Tel: {contactInfo.phonePrimary}
                <br />
                Cell: {contactInfo.phoneSecondary}
              </p>
              <p className="mb-3">Email: {contactInfo.email}</p>

              <h3 className="h6 fw-bold mb-2">Servizi</h3>
              <ul className="list-unstyled mb-0">
                {contactInfo.services.map((srv) => (
                  <li key={srv}>• {srv}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Colonna form contatti */}
          <div className="col-md-8">
            <div className="border rounded p-3">
              <h2 className="h5 fw-bold mb-3">Richiedi informazioni</h2>
              {/* NOTA: per ora il form non ha logica JS, è puramente estetico.
                  In futuro potremo gestire lo stato con useState e inviare i dati
                  a un backend o a un servizio esterno. */}
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Nome e cognome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="nome@example.com"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="form-control"
                      placeholder="+39 ..."
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="service" className="form-label">
                      Servizio di interesse
                    </label>
                    <select id="service" className="form-select">
                      <option value="">Seleziona un servizio</option>
                      {contactInfo.services.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Messaggio
                    </label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Scrivici come possiamo aiutarti"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-dark">
                      Invia richiesta
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
