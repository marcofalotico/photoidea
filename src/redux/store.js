// src/redux/store.js
// Crea lo store Redux usando il rootReducer.

import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./rootReducer.js";

export const store = createStore(
  rootReducer,
  // In sviluppo: integrazione con Redux DevTools (se hai l'estensione nel browser)
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
