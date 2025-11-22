// src/components/MainNavbar.jsx
// Navbar con:
// - logo a sinistra
// - menu + bottone "Chiedi informazioni" allineati a destra
// - hamburger che collassa il menu su mobile
// - background che cambia su scroll (logica già vista)

import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

function MainNavbar() {
  // [Concetto React] useState: stato locale del componente.
  // Qui teniamo traccia se l'utente ha scrollato o meno, per cambiare stile.
  const [scrolled, setScrolled] = useState(false);

  // [Concetto React] useEffect: effetto collaterale dopo il render.
  // Registriamo un listener sullo scroll della finestra.
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inizializza lo stato in base alla posizione attuale

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Richiude il menu su mobile quando clicco un link o il bottone.
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
        {/* Logo / brand
            [Concetto React Router] Link evita il full reload della pagina
            e usa la navigazione client-side verso "/". */}
        <Link className="navbar-brand fw-bold" to="/">
          <img src="/images/logo/logo.webp" alt="PhotoIdea logo" />
        </Link>

        {/* Bottone hamburger per mobile.
            data-bs-* è letto da Bootstrap JS per fare il toggle del collapse. */}
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

        {/* Contenuto collassabile della navbar */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* Wrapper che contiene:
              - la lista dei link
              - il bottone CTA
              ed è allineato a destra con ms-auto. 
              Su mobile le colonne si dispongono in colonna, su desktop in riga. */}
          <div className="ms-auto d-flex align-items-center gap-3 flex-column flex-lg-row">
            {/* Lista voci di menu */}
            <ul className="navbar-nav mb-2 mb-lg-0">
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

            {/* Bottone CTA: anche lui chiude il menu su mobile al click */}
            <Link
              to="/contatti"
              className="btn btn-outline-dark text-uppercase small ms-lg-3"
              onClick={handleNavItemClick}
            >
              Chiedi informazioni
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;