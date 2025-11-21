// src/pages/ContactPage.jsx
// Versione con useState per gestire lo stato del form contatti.
// Qui vedrai la differenza tra:
// - stato locale del componente (useState) per dati effimeri del form
// - stato globale (Redux) per cose condivise tra più componenti.

import React, { useState } from "react";
import { contactInfo } from "../content/contactInfo.js";

function ContactPage() {
  // [useState] Inizializziamo uno stato locale per ciascun campo del form.
  // Potremmo anche usare un singolo oggetto, ma per chiarezza li teniamo separati.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  // Piccolo stato per il messaggio di conferma
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Qui potresti inviare i dati a un backend (fetch/axios).
    // Per ora simuliamo semplicemente un "invio" lato client.
    console.log("Richiesta contatto:", {
      name,
      email,
      phone,
      service,
      message,
    });

    setConfirmation(
      "Grazie per il tuo messaggio! Ti risponderemo il prima possibile."
    );

    // Reset dei campi
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setMessage("");
  };

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

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Nome e cognome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="service" className="form-label">
                      Servizio di interesse
                    </label>
                    <select
                      id="service"
                      className="form-select"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-dark">
                      Invia richiesta
                    </button>
                  </div>
                </div>
              </form>

              {confirmation && (
                <div className="alert alert-success mt-3" role="alert">
                  {confirmation}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
