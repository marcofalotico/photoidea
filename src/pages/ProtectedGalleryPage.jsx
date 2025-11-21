// src/pages/ProtectedGalleryPage.jsx
// Esempio di "galleria clienti" protetta da una password lato client.
// Scopo didattico:
// - usare useState per gestire il valore dell'input password
// - usare Redux per memorizzare se l'utente è autenticato oppure no
// - evitare prop drilling: lo stato di login non viene passato via props
//   ma letto da qualsiasi componente tramite useSelector.

import React, { useState } from "react"; // useState per lo stato locale del form
import { useDispatch, useSelector } from "react-redux";
import { attemptGalleryLogin, galleryLogout } from "../redux/actions.js";

function ProtectedGalleryPage() {
  // [useState] Stato locale per la password digitata dall'utente.
  // Non ha senso metterla in Redux perché è un dato effimero del form.
  const [passwordInput, setPasswordInput] = useState("");

  // [Redux] useDispatch ci dà la funzione dispatch per inviare azioni allo store.
  const dispatch = useDispatch();

  // [Redux] useSelector per leggere lo stato della gallery.
  const isAuthenticated = useSelector(
    (state) => state.gallery.isAuthenticated
  );
  const error = useSelector((state) => state.gallery.error);

  const handleSubmit = (event) => {
    // Fermiamo il submit di default del browser (rinfrescherebbe la pagina)
    event.preventDefault();

    // Dispatch dell'azione per tentare il login.
    // L'action creator crea un oggetto { type, payload } in base alla password.
    dispatch(attemptGalleryLogin(passwordInput));
  };

  const handleLogout = () => {
    dispatch(galleryLogout());
    setPasswordInput("");
  };

  if (!isAuthenticated) {
    // Caso NON autenticato: mostriamo il form password
    return (
      <section className="py-5">
        <div className="container" style={{ maxWidth: "500px" }}>
          <h1 className="fw-bold mb-3">Galleria clienti</h1>
          <p className="text-muted mb-4">
            Inserisci la password che hai ricevuto via email per accedere alla
            tua galleria riservata.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="galleryPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="galleryPassword"
                className="form-control"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                // useState aggiorna lo stato locale e provoca un re-render del componente.
              />
              {error && (
                <div className="text-danger small mt-1">{error}</div>
              )}
            </div>
            <button type="submit" className="btn btn-dark">
              Accedi alla galleria
            </button>
          </form>
        </div>
      </section>
    );
  }

  // Caso autenticato: mostriamo la "galleria" (placeholder)
  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fw-bold mb-0">Galleria riservata</h1>
          <button className="btn btn-outline-secondary btn-sm" onClick={handleLogout}>
            Esci
          </button>
        </div>

        <p className="text-muted mb-4">
          Qui potresti caricare le foto specifiche per il cliente loggato.
          Al momento è solo un esempio didattico.
        </p>

        <div className="row g-3">
          {/* Placeholder immagini */}
          <div className="col-sm-6 col-md-4">
            <div className="ratio ratio-4x3 bg-secondary bg-opacity-10 rounded" />
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="ratio ratio-4x3 bg-secondary bg-opacity-10 rounded" />
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="ratio ratio-4x3 bg-secondary bg-opacity-10 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProtectedGalleryPage;
