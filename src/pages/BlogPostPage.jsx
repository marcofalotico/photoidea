// src/pages/BlogPostPage.jsx
// Pagina che mostra un singolo articolo del blog.
//
// Concetti:
// - useParams: leggiamo lo "slug" dinamico dall'URL (/blog/:slug)
// - Troviamo il post in blogPosts in base allo slug
// - Mostriamo titolo, "categoria" dedotta da id, data pubblicazione,
//   immagine di copertina e, se presenti, un carosello di altre immagini.
//
// In più usiamo Swiper per lo slider delle immagini di galleryImages.

import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../content/blogPosts.js";

// Swiper per lo slider immagini del post
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function BlogPostPage() {
  // useParams ritorna un oggetto con le parti dinamiche dell'URL.
  // Se il route è definito come "/blog/:slug",
  // qui otteniamo qualcosa tipo { slug: "un-matrimonio-da-favola-a-piobesi" }.
  const { slug } = useParams();

  // Troviamo il post in base allo slug
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    // Caso post non trovato: mostriamo un messaggio semplice.
    return (
      <section className="py-5">
        <div className="container">
          <h1 className="fw-bold">Articolo non trovato</h1>
          <p className="text-muted">
            L&apos;articolo che stai cercando non esiste o è stato rimosso.
          </p>
        </div>
      </section>
    );
  }

  // Mappiamo l'id (che per noi rappresenta anche la categoria/servizio)
  // in un'etichetta più leggibile per l'utente.
  const categoryLabelMap = {
    matrimonio: "Matrimonio",
    // aggiungerai altre categorie se in futuro avrai post per altri servizi
  };

  const categoryLabel = categoryLabelMap[post.id] || "Blog";
  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("it-IT")
    : "";

  // galleryImages può non esserci o essere vuoto; ci proteggiamo
  const galleryImages = Array.isArray(post.galleryImages)
    ? post.galleryImages
    : [];

  return (
    <section className="py-5">
      <div className="container">
        <article className="mx-auto" style={{ maxWidth: "900px" }}>
          {/* HEADER: titolo + meta info */}
          <header className="mb-4">
            <h1 className="fw-bold mb-2">{post.title}</h1>
            {(categoryLabel || publishedDate) && (
              <p className="text-muted mb-1">
                {categoryLabel}
                {categoryLabel && publishedDate && " · "}
                {publishedDate}
              </p>
            )}
          </header>

          {/* Immagine di copertina principale */}
          <div className="ratio ratio-16x9 mb-4 rounded overflow-hidden shadow-sm">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Carosello aggiuntivo di immagini, se galleryImages ha elementi */}
          {galleryImages.length > 0 && (
            <div className="mb-4">
              <Swiper
                modules={[Navigation]}
                navigation
                loop
                spaceBetween={16}
                slidesPerView={1}
                className="blog-gallery-swiper"
              >
                {galleryImages.map((imgPath, index) => (
                  <SwiperSlide key={imgPath + index}>
                    <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                      <img
                        src={imgPath}
                        alt={`${post.title} - immagine ${index + 1}`}
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {/* Testo articolo.
              Per ora usiamo un semplice <p>; in futuro potremo
              spezzare la stringa in paragrafi o usare un parser markdown. */}
          <div className="mb-5">
            <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
              {post.content}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BlogPostPage;
