// src/pages/PortfolioPage.jsx
// Pagina che mostra tutte le categorie del portfolio.
// Ogni categoria porta a una pagina dedicata (PortfolioDetailPage).

import React from "react";
import { Link } from "react-router-dom";
import { portfolioCategories } from "../content/portfolio.js";

function PortfolioPage() {
  return (
    <section className="py-5">
      <div className="container">
        <header className="mb-4 text-center">
          <h1 className="fw-bold">Portfolio</h1>
          <p className="text-muted">
            Una selezione di servizi: matrimoni, maternità, battesimi, bambini,
            corporate e sessioni a tema.
          </p>
        </header>

        <div className="row g-4">
          {portfolioCategories.map((category) => (
            <div className="col-md-4" key={category.id}>
              <div className="card h-100">
                {/* Per ora non abbiamo immagini specifiche per ogni categoria di portfolio.
                    Potremmo collegarle a portfolioImages in futuro. */}
                <div className="card-body d-flex flex-column">
                  <h2 className="h5">{category.menuLabel}</h2>
                  <p className="text-muted flex-grow-1">
                    {category.description}
                  </p>
                  <Link
                    to={`/portfolio/${category.slug}`}
                    className="btn btn-outline-dark mt-2"
                  >
                    Guarda le foto
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

export default PortfolioPage;
