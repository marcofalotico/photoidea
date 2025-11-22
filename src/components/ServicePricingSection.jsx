// src/components/ServicePricingSection.jsx
// Sezione "Pacchetti / prezzi" per un servizio specifico.
//
// - Usa SOLO le classi Bootstrap (+ un po' di CSS custom).
// - Legge i pacchetti da service.pricingPackages (services.js).
// - Chiama onSelectPackage(pkg) quando clicchi su "Info".

import React from "react";

function ServicePricingSection({ service, onSelectPackage }) {
  const packages = Array.isArray(service?.pricingPackages)
    ? service.pricingPackages
    : [];

  if (packages.length === 0) {
    console.log(
      "[ServicePricingSection] Nessun pacchetto definito per",
      service?.menuLabel
    );
    return null;
  }

  return (
    <section className="py-5">
      <div className="container">
        {/* Titolo sezione prezzi */}
        <div className="text-center mb-4">
          <h2 className="h4 fw-bold mb-2">
            Pacchetti {service.menuLabel}
          </h2>
          <p className="text-muted mb-0">
            Scegli la formula che meglio si adatta al tuo servizio{" "}
            {service.menuLabel.toLowerCase()}.
          </p>
        </div>

        {/* Griglia Bootstrap */}
        <div className="row g-4 justify-content-center">
          {packages.map((pkg) => (
            <div
              className="col-12 col-md-6 col-lg-3"
              key={pkg.id}
            >
              <div
                className={
                  "card h-100 text-center pricing-card " +
                  (pkg.isHighlighted ? "pricing-card-highlighted" : "")
                }
              >
                {/* Header piano */}
                <div className="card-header bg-transparent border-0 pb-0">
                  <h3 className="pricing-title mb-1">
                    {pkg.name}
                  </h3>
                  <p className="pricing-price mb-0">
                    {pkg.priceLabel}
                  </p>
                </div>

                {/* Corpo: features + bottone */}
                <div className="card-body d-flex flex-column pt-3">
                  <ul className="list-unstyled mb-4 text-start small flex-grow-1">
                    {pkg.features.map((feature, index) => (
                      <li
                        key={`${pkg.id}-feature-${index}`}
                        className="d-flex align-items-start mb-2"
                      >
                        <span className="me-2 text-success fw-bold">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={
                      "btn w-100 mt-auto " +
                      (pkg.isHighlighted ? "btn-dark" : "btn-outline-dark")
                    }
                    onClick={() =>
                      onSelectPackage && onSelectPackage(pkg)
                    }
                  >
                    {pkg.ctaLabel || "Info"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicePricingSection;
