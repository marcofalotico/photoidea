// src/components/GoogleReviewsSection.jsx
// Replica del widget Featurable "Google Reviews" con:
// - Desktop/Tablet: 3 card visibili
// - Mobile (< 768px): 1 card visibile
// - Autoplay in loop + frecce sinistra/destra
// - Testo recensione troncato a 300 caratteri con pulsante "Di più / Mostra meno"
// - Effetto di slide da destra verso sinistra ad ogni cambio slide

import React, { useEffect, useState } from "react";

// UUID del widget Featurable (preso dalla dashboard)
const FEATURABLE_WIDGET_ID = "0f027f3b-da92-4422-9242-f70a4d00d5bc";
const FEATURABLE_API_URL = `https://featurable.com/api/v2/widgets/${FEATURABLE_WIDGET_ID}`;

// Quanti "passi" fa lo slider ad ogni avanzamento
const SLIDE_STEP = 1;

// Intervallo di autoplay (millisecondi)
const SLIDE_INTERVAL_MS = 3000;

// Lunghezza massima del testo della recensione prima di mostrare "Di più"
const REVIEW_MAX_CHARS = 300;

function GoogleReviewsSection() {
  // Stato con l'array completo di recensioni provenienti dall'API
  const [reviews, setReviews] = useState([]);

  // Stato con il riassunto globale (rating medio, numero recensioni, link "scrivi recensione")
  const [summary, setSummary] = useState(null);

  // Stati di servizio: caricamento e errore
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Indice di partenza del blocco corrente di recensioni mostrate nello slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // Numero di card da mostrare contemporaneamente (1 su mobile, 3 su desktop)
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Pausa autoplay quando l'utente passa il mouse sopra allo slider
  const [isHovered, setIsHovered] = useState(false);

  // Array con gli ID delle recensioni attualmente espanse (dove abbiamo cliccato "Di più")
  const [expandedIds, setExpandedIds] = useState([]);

  // ---------------------------------------------------------------------------
  // 1) Fetch delle recensioni da Featurable al mount del componente
  // ---------------------------------------------------------------------------
  useEffect(() => {
    async function loadReviews() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(FEATURABLE_API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();

        if (!data.success || !data.widget) {
          throw new Error("Risposta Featurable non valida");
        }

        const widget = data.widget;

        if (!Array.isArray(widget.reviews)) {
          throw new Error("Nessun array 'reviews' trovato nella risposta Featurable");
        }

        // Salviamo tutte le recensioni e il riassunto globale nello stato
        setReviews(widget.reviews || []);
        setSummary(widget.gbpLocationSummary || null);
      } catch (err) {
        console.error("Errore nel caricamento delle recensioni Featurable:", err);
        setError("Non è stato possibile caricare le recensioni al momento.");
      } finally {
        setLoading(false);
      }
    }

    // Chiamiamo la funzione async una sola volta al montaggio del componente
    loadReviews();
  }, []);

  // ---------------------------------------------------------------------------
  // 2) Impostiamo cardsPerPage in base alla larghezza dello schermo (responsive)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    /*
      Qui usiamo window.innerWidth per capire se siamo "sotto" il breakpoint md
      di Bootstrap (768px). In quel caso vogliamo mostrare 1 sola card per volta.
      Altrimenti 3 card.

      TEORIA REACT:
      - Questo useEffect viene eseguito una volta al mount.
      - Agganciamo un listener su "resize" per aggiornare cardsPerPage quando
        la finestra cambia dimensione.
    */
    function updateCardsPerPage() {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(3);
      }
    }

    // Impostazione iniziale
    updateCardsPerPage();

    // Listener al resize
    window.addEventListener("resize", updateCardsPerPage);

    // Cleanup: rimuoviamo il listener quando il componente si smonta
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  // ---------------------------------------------------------------------------
  // 3) Autoplay dello slider (loop infinito)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    /*
      Qui impostiamo un setInterval che avanza lo slider ogni SLIDE_INTERVAL_MS.
      L'autoplay si attiva solo se:
      - abbiamo almeno una recensione
      - l'utente NON è in hover (isHovered = false)

      TEORIA:
      - Usiamo setCurrentIndex(prev => ...) per basarci sempre sul valore più
        aggiornato dello stato, evitando problemi in caso di aggiornamenti rapidi.
    */
    if (reviews.length === 0 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const total = reviews.length;
        if (total === 0) return 0;
        return (prevIndex + SLIDE_STEP) % total;
      });
    }, SLIDE_INTERVAL_MS);

    // Cleanup: cancelliamo l'intervallo quando cambia una dipendenza
    return () => clearInterval(interval);
  }, [reviews, isHovered]);

  // ---------------------------------------------------------------------------
  // 4) Funzioni per il carousel (avanti / indietro e raccolta card visibili)
  // ---------------------------------------------------------------------------
  const goNext = () => {
    setCurrentIndex((prevIndex) => {
      const total = reviews.length;
      if (total === 0) return 0;
      return (prevIndex + SLIDE_STEP) % total;
    });
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => {
      const total = reviews.length;
      if (total === 0) return 0;
      return (prevIndex - SLIDE_STEP + total) % total;
    });
  };

  const getVisibleReviews = () => {
    /*
      Questa funzione deriva l'array delle recensioni da mostrare
      a partire da:
      - reviews: array completo
      - currentIndex: indice di partenza
      - cardsPerPage: quante card vogliamo vedere nello stesso momento

      Se il numero totale di recensioni è <= cardsPerPage → le mostriamo tutte.
    */
    const total = reviews.length;
    if (total <= cardsPerPage) {
      return reviews;
    }

    const visible = [];
    for (let i = 0; i < cardsPerPage; i++) {
      const index = (currentIndex + i) % total;
      visible.push(reviews[index]);
    }
    return visible;
  };

  // Tradurre il rating numerico in etichetta testuale
  const getRatingLabel = (rating) => {
    if (rating >= 4.7) return "Eccellente";
    if (rating >= 4.3) return "Ottimo";
    if (rating >= 3.8) return "Buono";
    return "Valutazione";
  };

  // ---------------------------------------------------------------------------
  // 5) Gestione "Di più / Mostra meno"
  // ---------------------------------------------------------------------------
  const toggleExpanded = (reviewId) => {
    /*
      expandedIds è un array di ID delle recensioni attualmente "espande".
      Se l'ID è già presente → lo rimuoviamo (torna accorciata).
      Se NON è presente → lo aggiungiamo (mostra l'intero testo).

      TEORIA:
      - Usiamo la forma funzionale di setState: setExpandedIds(prev => ...)
        perché dipendiamo dal valore precedente dello stato.
    */
    setExpandedIds((prev) => {
      if (prev.includes(reviewId)) {
        return prev.filter((id) => id !== reviewId);
      }
      return [...prev, reviewId];
    });
  };

  // ---------------------------------------------------------------------------
  // Stati speciali: loading / errore / nessuna review
  // ---------------------------------------------------------------------------
  if (loading) {
    return (
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold">Recensioni Google</h2>
          <p className="text-muted">Caricamento recensioni in corso...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold">Recensioni Google</h2>
          <p className="text-muted">
            Recensioni reali e verificate direttamente dalla nostra scheda Google.
          </p>
          <p className="text-danger">{error}</p>
        </div>
      </section>
    );
  }

  if (!reviews.length) {
    return (
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold">Recensioni Google</h2>
          <p className="text-muted">Non sono ancora presenti recensioni da mostrare.</p>
        </div>
      </section>
    );
  }

  // Dati derivati per il render "normale"
  const visibleReviews = getVisibleReviews();
  const rating = summary?.rating ?? 0;
  const reviewsCount = summary?.reviewsCount ?? reviews.length;
  const writeReviewUrl = summary?.writeAReviewUri ?? null;
  const ratingLabel = getRatingLabel(rating);

  // ---------------------------------------------------------------------------
  // Render finale (clone del widget Featurable con comportamento responsive)
  // ---------------------------------------------------------------------------
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Titolo sezione */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Cosa dicono i nostri clienti su Google</h2>
        </div>

        {/* Header riassuntivo */}
        <div className="bg-white rounded-4 shadow-sm p-4 mb-4 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
          <div className="mb-3 mb-md-0">
            <div className="d-flex align-items-center mb-2">
              <h3 className="fw-bold mb-0 me-3">{ratingLabel}</h3>
              <div className="fs-5" style={{ color: "#fbbc04" }}>
                {"★".repeat(Math.round(rating))}
                {"☆".repeat(5 - Math.round(rating))}
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center">
              <span className="fw-bold me-2" style={{ color: "#4285F4" }}>
                Google
              </span>
              <span className="fw-semibold me-2">{rating.toFixed(1)}</span>
              <span className="text-muted">
                Basato su{" "}
                <span className="text-decoration-underline">
                  {reviewsCount} recensioni
                </span>
              </span>
            </div>
          </div>

          {writeReviewUrl && (
            <div>
              <a
                href={writeReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary fw-semibold"
              >
                Scrivi una recensione
              </a>
            </div>
          )}
        </div>

        {/* Carousel */}
        <div
          className="position-relative mb-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Wrapper che nasconde l'overflow orizzontale per l'effetto slide */}
          <div className="google-reviews-slider">
            {/* 
              Row che contiene le card.
              key={currentIndex} forza il remount della row ad ogni cambio slide,
              così l'animazione CSS 'google-reviews-slide-enter' parte ogni volta.
            */}
            <div
              key={currentIndex}
              className="row g-4 justify-content-center google-reviews-slide-enter"
            >
              {visibleReviews.map((review) => {
                // Testo originale: preferiamo quello italiano se presente
                const body = (review.originalText || review.text || "").trim();

                // Data della recensione
                const date = review.publishedAt
                  ? new Date(review.publishedAt).toLocaleDateString("it-IT", {
                      day: "numeric",
                      month: "long",
                    })
                  : "";

                const ratingValue = review.rating?.value ?? 0;
                const maxRating = review.rating?.max ?? 5;

                // Gestione testo troncato + "Di più"
                const isExpanded = expandedIds.includes(review.id);
                const isLong = body.length > REVIEW_MAX_CHARS;

                const displayedText =
                  !isLong || isExpanded
                    ? body
                    : body.slice(0, REVIEW_MAX_CHARS) + "…";

                return (
                  <div className="col-12 col-md-4" key={review.id}>
                    <div className="bg-white rounded-4 shadow-sm p-4 h-100 d-flex flex-column">
                      {/* Header card: avatar, nome, data */}
                      <div className="d-flex align-items-center mb-2">
                        {review.author?.avatarUrl ? (
                          <img
                            src={review.author.avatarUrl}
                            alt={review.author.name}
                            className="rounded-circle me-2"
                            width={40}
                            height={40}
                          />
                        ) : (
                          <div
                            className="rounded-circle me-2 d-flex align-items-center justify-content-center"
                            style={{
                              width: 40,
                              height: 40,
                              backgroundColor: "#e0e0e0",
                              fontWeight: "bold",
                            }}
                          >
                            {review.author?.name?.[0]?.toUpperCase() ?? "?"}
                          </div>
                        )}
                        <div>
                          <div className="fw-semibold">{review.author?.name}</div>
                          {date && <small className="text-muted">{date}</small>}
                        </div>
                      </div>

                      {/* Testo recensione (troncato o completo) + "Di più / Mostra meno" */}
                      <div className="flex-grow-1 mb-3">
                        <p className="mb-1" style={{ whiteSpace: "pre-line" }}>
                          {displayedText}
                        </p>

                        {isLong && (
                          <button
                            type="button"
                            className="btn btn-link p-0 mt-1"
                            style={{ fontSize: "0.9rem" }}
                            onClick={() => toggleExpanded(review.id)}
                          >
                            {isExpanded ? "Mostra meno" : "Di più"}
                          </button>
                        )}
                      </div>

                      {/* Footer card: stelline + "Google" colorato */}
                      <div className="d-flex justify-content-between align-items-center">
                        <div style={{ color: "#fbbc04" }}>
                          {"★".repeat(ratingValue)}
                          {"☆".repeat(maxRating - ratingValue)}
                        </div>
                        <span
                          className="fw-bold"
                          style={{
                            fontSize: "0.9rem",
                            color: "#4285F4",
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          G
                          <span style={{ color: "#EA4335" }}>o</span>
                          <span style={{ color: "#FBBC05" }}>o</span>
                          <span style={{ color: "#4285F4" }}>g</span>
                          <span style={{ color: "#34A853" }}>l</span>
                          <span style={{ color: "#EA4335" }}>e</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Frecce navigazione: mostrate solo se abbiamo più recensioni del numero di card */}
          {reviews.length > cardsPerPage && (
            <>
              <button
                type="button"
                className="btn btn-light border rounded-circle position-absolute top-50 start-0 translate-middle-y shadow-sm"
                style={{ width: 40, height: 40 }}
                onClick={goPrev}
                aria-label="Recensioni precedenti"
              >
                ‹
              </button>
              <button
                type="button"
                className="btn btn-light border rounded-circle position-absolute top-50 end-0 translate-middle-y shadow-sm"
                style={{ width: 40, height: 40 }}
                onClick={goNext}
                aria-label="Recensioni successive"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default GoogleReviewsSection;
