// src/pages/ServiceDetailPage.jsx
// Pagina di dettaglio di un singolo servizio.
// - Legge lo slug dall'URL tramite useParams (React Router)
// - Trova il servizio corrispondente nell'array "services"
// - Usa Redux per salvare nel global state quale servizio è selezionato
//   (useDispatch + action setSelectedService)

import React, { useEffect } from "react"; // useEffect per l'effetto al mount
import { useParams } from "react-router-dom"; // per leggere :slug dall'URL
import { useDispatch } from "react-redux"; // per dispatchare azioni Redux
import { services } from "../content/services.js";
import { setSelectedService } from "../redux/actions.js"; // action creator Redux

function ServiceDetailPage() {
  // [Router] useParams legge i parametri dinamici della rotta (es. /servizi/:slug).
  // Ritorna un oggetto { slug: "valore" }.
  const { slug } = useParams();

  // [Redux] useDispatch restituisce la funzione dispatch,
  // che usiamo per inviare azioni allo store.
  const dispatch = useDispatch();

  // Troviamo il servizio che ha slug uguale a quello dell'URL
  const service = services.find((s) => s.slug === slug);

  // Se il servizio esiste, vogliamo segnare nello store che questo è il servizio selezionato.
  useEffect(() => {
    if (service) {
      // [Redux] dispatch invia l'azione allo store.
      // setSelectedService è un action creator (restituisce { type, payload }).
      dispatch(setSelectedService(service.id));
    }
  }, [service, dispatch]); // [React] dependencies array: l'effetto si riesegue se cambia service o dispatch

  // Se non troviamo il servizio, mostriamo una pagina 404 "semplice"
  if (!service) {
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

  // Se il servizio esiste, mostriamo i dettagli
  return (
    <section className="py-5">
      <div className="container">
        {/* Hero titolo + immagine */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h1 className="fw-bold mb-3">{service.menuLabel}</h1>
            <p className="text-muted">{service.shortDescription}</p>
          </div>
          <div className="col-md-6">
            <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
              <img
                src={service.heroImage}
                alt={service.menuLabel}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Testo lungo descrittivo */}
        <div className="row">
          <div className="col-md-8">
            <h2 className="h4 fw-bold mb-3">Il servizio in dettaglio</h2>
            <p>{service.fullDescription}</p>
          </div>

          {/* Colonna laterale per CTA / info */}
          <div className="col-md-4">
            <div className="border rounded p-3 bg-light">
              <h3 className="h5 fw-bold mb-2">Vuoi informazioni?</h3>
              <p className="mb-3">
                Contattaci per avere un preventivo personalizzato per il servizio{" "}
                <strong>{service.menuLabel}</strong>.
              </p>
              {/* Per semplicità, un link alla pagina contatti */}
              <a href="/contatti" className="btn btn-dark w-100">
                Vai ai contatti
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetailPage;
