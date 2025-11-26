// src/components/ScrollToTopButton.jsx
import React, { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // mostra la freccia dopo 300px
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inizializza

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      className="scroll-top-btn scroll-top-btn--visible"
      onClick={handleClick}
      aria-label="Torna all'inizio della pagina"
    >
      {/* usa Bootstrap Icons se le hai già */}
      <i className="bi bi-arrow-up-short" aria-hidden="true"></i>
    </button>
  );
}

export default ScrollToTopButton;   
