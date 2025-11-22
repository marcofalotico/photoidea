// src/pages/ServiceDetailPage.jsx
// Pagina di dettaglio di un singolo servizio (es. /servizi/matrimonio)
//
// Concetti chiave:
// - useParams: per leggere lo "slug" dall'URL (/servizi/:slug)
// - Redux: usiamo setContactService per precompilare il form contatti
//   con il servizio (o pacchetto) selezionato, evitando prop drilling
// - useNavigate: per spostarsi programmaticamente verso /contatti
// - Swiper: per i caroselli di immagini (servizio e fotolibri)
// - Filtriamo i blog per blogCategoryId del servizio

import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { services } from "../content/services.js";
import { blogPosts } from "../content/blogPosts.js";
import { setContactService } from "../redux/actions.js";

// Swiper per gallerie immagini
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function ServiceDetailPage() {
  // 1) Recuperiamo lo slug dall'URL.
  //    Se il route è "/servizi/:slug", qui otteniamo qualcosa tipo { slug: "matrimonio" }.
  const { slug } = useParams();

  // 2) Troviamo il servizio corrispondente allo slug nella lista "services".
  const service = services.find((srv) => srv.slug === slug);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 3) Handler generico per andare alla pagina contatti.
  //    Possiamo passare un "subject" opzionale per specificare
  //    meglio cosa precompilare (es. pacchetto singolo).
  const handleContactClick = (subjectOverride) => {
    if (!service) return;

    const subject =
      subjectOverride ||
      service?.ctaConfig?.prefillSubject ||
      service.menuLabel;

    // [Redux] Invece di passare questa info tramite props
    // a tutti i componenti fino al form dei contatti,
    // la salviamo nello stato globale.
    dispatch(setContactService(subject));

    // [React Router] useNavigate: navigazione programmata verso "/contatti"
    navigate("/contatti");
  };

  if (!service) {
    // Caso slug inesistente: mostriamo un fallback.
    return (
      <section className="py-5">
        <div className="container">
          <h1 className="fw-bold">Servizio non trovato</h1>
          <p className="text-muted">
            Il servizio che stai cercando non esiste o è stato rimosso.
          </p>
        </div>
      </section>
    );
  }

  // Galleria immagini specifica del servizio (punto 4)
  const serviceGalleryImages = Array.isArray(service.serviceGalleryImages)
    ? service.serviceGalleryImages
    : [];

  // Pacchetti / promozioni (punto 6)
  const hasPackages =
    Array.isArray(service.packages) && service.packages.length > 0;

  // Offerta limitata (punto 7)
  const limitedOfferEnabled = service.limitedOffer?.enabled;

  // Instagram box (punto 8)
  const hasInstagram = !!service.instagram;

  // Fotolibri (punto 10)
  const hasPhotobook =
    service.photobook &&
    Array.isArray(service.photobook.images) &&
    service.photobook.images.length > 0;

  // Video YouTube (punto 11)
  const hasVideos =
    Array.isArray(service.videos) && service.videos.length > 0;

  // Blog collegati (punto 12) → filtro per blogCategoryId
  const relatedBlogPosts = blogPosts.filter(
    (post) => post.id === service.blogCategoryId
  );

  return (
    <section className="py-5">
      <div className="container">
        {/* ==========================
            HEADER: titolo + sottotitolo + hero img
           ========================== */}
        <header className="row g-4 mb-5 align-items-start">
          <div className="col-lg-7">
            {/* 1. Titolo del servizio */}
            <h1 className="fw-bold mb-3">{service.menuLabel}</h1>

            {/* 2. Sottotitolo SEO */}
            {service.seoSubtitle && (
              <p className="lead text-muted">{service.seoSubtitle}</p>
            )}

            {/* 3. Descrizione breve */}
            {service.shortDescription && (
              <p className="mt-3 text-muted">{service.shortDescription}</p>
            )}

            {/* 5. Call to action principale */}
            <div className="mt-4">
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => handleContactClick()}
              >
                Chiedi informazioni su {service.menuLabel}
              </button>
            </div>
          </div>

          {/* Immagine hero principale a destra */}
          <div className="col-lg-5">
            <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
              <img
                src={service.heroImage}
                alt={service.menuLabel}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </header>

        {/* ==========================
            4. Carosello immagini del servizio
           ========================== */}
        {serviceGalleryImages.length > 0 && (
          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3">
              Alcuni scatti dal servizio {service.menuLabel}
            </h2>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              className="service-gallery-swiper"
            >
              {serviceGalleryImages.map((imgPath, index) => (
                <SwiperSlide key={imgPath + index}>
                  <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                    <img
                      src={imgPath}
                      alt={`${service.menuLabel} ${index + 1}`}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}

        {/* ==========================
            3. Testo di dettaglio + CTA laterale
           ========================== */}
        <section className="row g-4 mb-5">
          <div className="col-md-8">
            <h2 className="h4 fw-bold mb-3">Il servizio in dettaglio</h2>
            {service.fullDescription && (
              <p
                className="text-muted"
                style={{ whiteSpace: "pre-line" }}
              >
                {service.fullDescription}
              </p>
            )}
          </div>

          {/* Box laterale "Vuoi informazioni?" basato su ctaConfig */}
          <div className="col-md-4">
            <div className="border rounded p-3 bg-light">
              <h3 className="h6 fw-bold mb-2">
                {service.ctaConfig?.title || "Vuoi informazioni?"}
              </h3>
              <p className="small text-muted mb-3">
                {service.ctaConfig?.text ||
                  `Contattaci per avere un preventivo personalizzato per il servizio ${service.menuLabel}.`}
              </p>
              <button
                type="button"
                className="btn btn-outline-dark btn-sm"
                onClick={() => handleContactClick()}
              >
                {service.ctaConfig?.buttonLabel ||
                  "Vai al form contatti"}
              </button>
            </div>
          </div>
        </section>

        {/* ==========================
            6. Pacchetti / promozioni (card)
           ========================== */}
        {hasPackages && (
          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3">
              Pacchetti {service.menuLabel}
            </h2>
            <div className="row g-4">
              {service.packages.map((pkg) => (
                <div className="col-md-4" key={pkg.id}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <h3 className="h5 fw-bold mb-1">{pkg.name}</h3>
                      {pkg.priceLabel && (
                        <p className="text-primary fw-semibold mb-2">
                          {pkg.priceLabel}
                        </p>
                      )}
                      {pkg.shortDescription && (
                        <p className="text-muted small mb-3">
                          {pkg.shortDescription}
                        </p>
                      )}

                      {/* Elenco punti del pacchetto */}
                      {Array.isArray(pkg.features) &&
                        pkg.features.length > 0 && (
                          <ul className="small text-muted mb-3">
                            {pkg.features.map((f, idx) => (
                              <li key={idx}>{f}</li>
                            ))}
                          </ul>
                        )}

                      <div className="mt-auto">
                        <button
                          type="button"
                          className="btn btn-outline-dark btn-sm"
                          onClick={() =>
                            handleContactClick(
                              pkg.ctaSubject ||
                                `Richiesta informazioni: ${pkg.name}`
                            )
                          }
                        >
                          {pkg.ctaLabel || "Richiedi informazioni"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ==========================
            7. Banner offerta limitata
           ========================== */}
        {limitedOfferEnabled && (
          <section className="mb-5">
            <div className="p-4 rounded-3 bg-warning-subtle border border-warning">
              <div className="d-flex flex-column flex-md-row align-items-md-center gap-3">
                <div>
                  <span className="badge bg-warning text-dark me-2">
                    {service.limitedOffer.badgeLabel || "Offerta"}
                  </span>
                  <strong>{service.limitedOffer.title}</strong>
                </div>
                <div className="flex-grow-1 text-muted small">
                  {service.limitedOffer.message}
                  {service.limitedOffer.expiryText && (
                    <>
                      {" "}
                      <span className="fw-semibold">
                        {service.limitedOffer.expiryText}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==========================
            8. Box Instagram
           ========================== */}
        {hasInstagram && (
          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3">Seguici su Instagram</h2>
            <div className="border rounded p-3 d-flex flex-column flex-md-row align-items-md-center gap-3">
              <div
                className="rounded-circle d-inline-flex align-items-center justify-content-center"
                style={{
                  width: "56px",
                  height: "56px",
                  background:
                    "radial-gradient(circle at 30% 30%, #fdf497 0%, #fd5949 50%, #d6249f 75%, #285AEB 100%)",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                }}
              >
                IG
              </div>
              <div className="flex-grow-1">
                <p className="mb-1 fw-semibold">
                  @{service.instagram.username}
                </p>
                <p className="mb-1 text-muted small">
                  {service.instagram.introText}
                </p>
                <a
                  href={service.instagram.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="small"
                >
                  Vai al profilo Instagram
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ==========================
            9. Pulsante verso Portfolio
           ========================== */}
        {service.portfolioLink && (
          <section className="mb-5 text-center">
            <Link
              to={service.portfolioLink.url}
              className="btn btn-outline-dark"
            >
              {service.portfolioLink.label}
            </Link>
          </section>
        )}

        {/* ==========================
            10. Sezione Fotolibri
           ========================== */}
        {hasPhotobook && (
          <section className="mb-5">
            <h2 className="h4 fw-bold mb-1">
              {service.photobook.title}
            </h2>
            {service.photobook.subtitle && (
              <p className="text-muted mb-3">
                {service.photobook.subtitle}
              </p>
            )}
            {service.photobook.description && (
              <p
                className="text-muted mb-3"
                style={{ whiteSpace: "pre-line" }}
              >
                {service.photobook.description}
              </p>
            )}

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              loop
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              className="photobook-swiper"
            >
              {service.photobook.images.map((imgPath, index) => (
                <SwiperSlide key={imgPath + index}>
                  <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
                    <img
                      src={imgPath}
                      alt={`${service.photobook.title} ${index + 1}`}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}

        {/* ==========================
            11. Sezione Video YouTube
           ========================== */}
        {hasVideos && (
          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3">
              Video {service.menuLabel}
            </h2>
            <div className="row g-4">
              {service.videos.map((video) => (
                <div className="col-md-6" key={video.id}>
                  <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm mb-2">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="h6 fw-bold mb-1">{video.title}</h3>
                  {video.description && (
                    <p className="small text-muted mb-0">
                      {video.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ==========================
            12. Sezione Blog collegati
           ========================== */}
        {relatedBlogPosts.length > 0 && (
          <section className="mb-5">
            <h2 className="h4 fw-bold mb-3">
              Storie reali di {service.menuLabel}
            </h2>
            <div className="row g-4">
              {relatedBlogPosts.map((post) => (
                <div className="col-md-4" key={post.slug}>
                  <div className="card h-100 shadow-sm">
                    <div className="ratio ratio-4x3 rounded-top overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h3 className="h6 fw-bold mb-1">{post.title}</h3>
                      {post.excerpt && (
                        <p className="small text-muted flex-grow-1">
                          {post.excerpt}
                        </p>
                      )}
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
          </section>
        )}
      </div>
    </section>
  );
}

export default ServiceDetailPage;
