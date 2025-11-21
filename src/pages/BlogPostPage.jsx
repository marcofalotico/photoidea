// src/pages/BlogPostPage.jsx
// Pagina che mostra un singolo articolo del blog.
// - Legge lo slug dell'articolo dall'URL
// - Trova il post in blogPosts
// - Mostra titolo, data, categoria, immagine di copertina e contenuto

import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../content/blogPosts.js";

function BlogPostPage() {
  // useParams ritorna { slug: "valore" }
  const { slug } = useParams();

  // Troviamo il post in base allo slug
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    // Caso post non trovato
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

  return (
    <section className="py-5">
      <div className="container">
        <article className="mx-auto" style={{ maxWidth: "800px" }}>
          <header className="mb-4">
            <h1 className="fw-bold mb-2">{post.title}</h1>
            <p className="text-muted mb-1">
              {post.category} ·{" "}
              {new Date(post.date).toLocaleDateString("it-IT")}
            </p>
          </header>

          <div className="ratio ratio-16x9 mb-4 rounded overflow-hidden shadow-sm">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Testo articolo */}
          <div className="mb-5">
            <p>{post.content}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BlogPostPage;
