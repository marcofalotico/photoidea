// src/App.jsx
// Questo file definisce la struttura principale dell'app:
// - BrowserRouter per gestire le rotte (URL -> componenti)
// - Layout con Navbar e Footer
// - Rotte per le pagine Home, Servizi, Portfolio, Blog, Contatti

import React from "react";

// BrowserRouter gestisce la history HTML5 e mappa l'URL ai componenti.
// Routes contiene le Route.
// Route definisce cosa rendere per un certo path.
// Link serve per creare link interni senza ricaricare la pagina (SPA).
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Importiamo i componenti di pagina.
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ServiceDetailPage from "./pages/ServiceDetailPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import PortfolioDetailPage from "./pages/PortfolioDetailPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProtectedGalleryPage from "./pages/ProtectedGalleryPage.jsx";

// Navbar e Footer come componenti riutilizzabili.
import MainNavbar from "./components/MainNavbar.jsx";
import MainFooter from "./components/MainFooter.jsx";


function App() {
  return (
    // BrowserRouter deve avvolgere tutta l'app
    // per permettere l'uso di <Link>, <Route>, ecc.
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <MainNavbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servizi" element={<ServicesPage />} />
            <Route path="/servizi/:slug" element={<ServiceDetailPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
            <Route path="/galleria-clienti" element={<ProtectedGalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contatti" element={<ContactPage />} />

            {/* TODO: potremmo aggiungere una rotta 404 per URL non trovati */}
          </Routes>
        </main>

        <MainFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
