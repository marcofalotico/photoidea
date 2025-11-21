// src/components/MainFooter.jsx
// Footer semplice con info di base.

import React from "react";
import { contactInfo } from "../content/contactInfo.js";

function MainFooter() {
  return (
    <footer className="bg-dark text-light py-4 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="fw-bold">PhotoIdea</h5>
            <p className="mb-1">{contactInfo.address}</p>
            <p className="mb-1">{contactInfo.city}</p>
            <p className="mb-1">
              Tel: {contactInfo.phonePrimary} — {contactInfo.phoneSecondary}
            </p>
            <p className="mb-0">Email: {contactInfo.email}</p>
          </div>
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <p className="mb-1">
              &copy; {new Date().getFullYear()} PhotoIdea — Tutti i diritti
              riservati.
            </p>
            <p className="mb-0">
              {/* TODO: link a privacy, cookie policy, ecc. */}
              <small>Privacy · Cookie · Termini</small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
