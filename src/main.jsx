// src/main.jsx
// Questo è il punto di ingresso dell'app React con Vite.
// Qui montiamo l'app sul DOM e aggiungeremo:
// - React Router (BrowserRouter)
// - Redux Provider (per lo store globale)
// - Bootstrap CSS

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import del CSS di Bootstrap: così tutte le classi .container, .row, .col-* ecc. sono disponibili nei componenti React.
import "bootstrap/dist/css/bootstrap.min.css";
// JS di Bootstrap (bundle con Popper + plugin come Collapse, Dropdown, ecc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Provider viene da react-redux e serve a "collegare" lo store Redux all'app React, in modo che i componenti possano usare useSelector/useDispatch.
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

// ReactDOM.createRoot è il metodo moderno (React 18) per montare l'app.
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode aiuta a identificare problemi potenziali durante lo sviluppo.
  // Può causare alcuni doppi render in dev, ma è utile per evitare bug.
  <React.StrictMode>
    {/* Provider avvolge <App /> e fornisce lo store a tutta l'app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
