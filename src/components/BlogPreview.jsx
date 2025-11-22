// src/components/BlogPreview.jsx
// Sezione della home che mostra gli ultimi articoli del blog.
// - Legge "blogPosts" dai contenuti
// - Mostra i 3 più recenti (ordinati per data)

import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../content/blogPosts.js";

function BlogPreview() {
  // Ordiniamo i post per data decrescente (dal più recente)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Prendiamo solo i primi 3 per la home
  const latestPosts = sortedPosts.slice(0, 3);

  return (
    <section className="py-5 bg-light border-top border-bottom">
      <div className="container">
        <div className="mb-4 text-center">
          <h2 className="fw-bold">Dal nostro blog</h2>
          <p className="text-muted">
            Storie di matrimoni, sessioni in studio e consigli per le tue foto.
          </p>
        </div>

        <div className="row g-4">
          {latestPosts.map((post) => (
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
                  <h3 className="h6">{post.title}</h3>
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
        </div>

        <div className="text-center mt-4">
          <Link to="/blog" className="btn btn-dark">
            Vai al blog
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogPreview;
