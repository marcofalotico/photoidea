// src/components/TestimonialsSection.jsx
// Sezione "Dicono di noi" con alcune recensioni.
// In futuro potremo trasformarla in slider/carousel con una libreria apposita.

import React from "react";
import { testimonials } from "../content/testimonials.js";

function TestimonialsSection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="mb-4 text-center">
          <h2 className="fw-bold">Dicono di noi</h2>
          <p className="text-muted">
            Alcune recensioni delle coppie e delle famiglie che abbiamo
            fotografato.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((review) => (
            <div className="col-md-4" key={review.id}>
              <div className="border rounded p-3 h-100 bg-white shadow-sm">
                <div className="mb-2">
                  <strong>{review.name}</strong>
                  <br />
                  <small className="text-muted">
                    {new Date(review.date).toLocaleDateString("it-IT")} ·{" "}
                    {review.source}
                  </small>
                </div>
                <div className="mb-2">
                  {/* Stelline rating semplificate */}
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="mb-0">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
