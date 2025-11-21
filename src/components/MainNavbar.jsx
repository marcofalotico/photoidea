// src/components/MainNavbar.jsx
// Navbar principale con Bootstrap.
// Qui usiamo Link di react-router-dom per evitare ricariche della pagina.

import React from "react";
import { Link, NavLink } from "react-router-dom";

function MainNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container">
        {/* Link al path "/" che funge da logo/testo brand */}
        <Link className="navbar-brand fw-bold" to="/">
          PhotoIdea
        </Link>

        {/* Bottone hamburger per mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* NavLink permette di avere una classe "active" automatica
                quando il path corrente corrisponde. */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/servizi">
                Servizi
              </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/galleria-clienti">
                    Galleria clienti
                </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">
                Portfolio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contatti">
                Contatti
              </NavLink>
            </li>
          </ul>

          {/* CTA per "Chiedi informazioni" stile bottone */}
          <Link className="btn btn-outline-dark ms-lg-3" to="/contatti">
            Chiedi informazioni
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
