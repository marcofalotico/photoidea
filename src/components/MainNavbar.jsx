// src/components/MainNavbar.jsx
// Navbar con:
// - background che cambia quando scrolli
// - hamburger che si richiude al click su un link
// - bottone "Chiedi informazioni" che porta a /contatti

import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

function MainNavbar() {
  // Stato locale: true se abbiamo scrollato oltre una certa soglia
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Handler chiamato ad ogni scroll
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    // Registriamo il listener
    window.addEventListener("scroll", handleScroll);

    // Chiamiamo subito per impostare lo stato "giusto" in base alla posizione iniziale
    handleScroll();

    // Cleanup: rimuoviamo il listener quando il componente viene smontato
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funzione che richiude il menu su mobile rimuovendo la classe "show"
  const handleNavItemClick = () => {
    const navbarCollapse = document.getElementById("mainNavbar");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <nav
      className={
        "navbar navbar-expand-lg navbar-light border-bottom navbar-main " +
        (scrolled ? "navbar-main-scrolled" : "")
      }
    >
      <div className="container">
        {/* Logo / brand */}
        <Link className="navbar-brand fw-bold" to="/">
          <img src="/images/logo/logo.webp" alt="PhotoIdea" />
        </Link>

        {/* Bottone hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenuto collassabile */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Servizi */}
            <li className="nav-item">
              <NavLink
                to="/servizi"
                className={({ isActive }) =>
                  "nav-link text-uppercase small " +
                  (isActive ? "active" : "")
                }
                onClick={handleNavItemClick}
              >
                Servizi
              </NavLink>
            </li>

            {/* Galleria clienti */}
            <li className="nav-item">
              <NavLink
                to="/galleria-clienti"
                className={({ isActive }) =>
                  "nav-link text-uppercase small " +
                  (isActive ? "active" : "")
                }
                onClick={handleNavItemClick}
              >
                Galleria clienti
              </NavLink>
            </li>

            {/* Portfolio */}
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  "nav-link text-uppercase small " +
                  (isActive ? "active" : "")
                }
                onClick={handleNavItemClick}
              >
                Portfolio
              </NavLink>
            </li>

            {/* Blog */}
            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  "nav-link text-uppercase small " +
                  (isActive ? "active" : "")
                }
                onClick={handleNavItemClick}
              >
                Blog
              </NavLink>
            </li>
          </ul>

          {/* Bottone CTA: anche lui richiude il menu su mobile */}
          <Link
            to="/contatti"
            className="btn btn-outline-dark text-uppercase small ms-lg-3"
            onClick={handleNavItemClick}
          >
            Chiedi informazioni
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
