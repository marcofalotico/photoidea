// src/pages/BlogPage.jsx
// Pagina che elenca tutti i post del blog con titolo, data, categoria, estratto.

import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../content/blogPosts.js";

function BlogPage() {
  // Ordiniamo i post dal più recente al meno recente
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="py-5">
      <div className="container">
        <header className="mb-4 text-center">
          <h1 className="fw-bold">Blog</h1>
          <p className="text-muted">
            Racconti di matrimoni, sessioni fotografiche e consigli per le tue
            foto.
          </p>
        </header>

        <div className="row g-4">
          {sortedPosts.map((post) => (
            <div className="col-md-4" key={post.slug}>
              <div className="card h-100">
                <div className="ratio ratio-4x3">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <span className="text-uppercase small text-muted mb-1">
                    {post.category} ·{" "}
                    {new Date(post.date).toLocaleDateString("it-IT")}
                  </span>
                  <h2 className="h6">{post.title}</h2>
                  <p className="text-muted flex-grow-1">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="btn btn-outline-dark btn-sm mt-2"
                  >
                    Leggi l&apos;articolo
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {sortedPosts.length === 0 && (
            <p className="text-muted">
              Non ci sono ancora articoli pubblicati. Aggiungili nel file
              blogPosts.js.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
