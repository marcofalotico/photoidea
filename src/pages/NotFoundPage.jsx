// src/pages/NotFoundPage.jsx
// Pagina 404 semplice.

import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3">
          Pagina non trovata
        </h1>
        <p className="text-muted mb-4">
          L&apos;indirizzo che stai cercando non esiste, oppure è
          stato spostato.
        </p>
        <Link to="/" className="btn btn-dark">
          Torna alla home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
