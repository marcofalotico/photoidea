// src/redux/store.js
// Lo store Redux è l'oggetto che contiene lo stato globale, permette di dispatchare azioni e registra i listener.
// In Redux "vecchio" lo creiamo con createStore.

import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducer.js";

// createStore accetta il reducer (obbligatorio) e opzionalmente
// uno stato iniziale o enhancer (es. per Redux DevTools).
export const store = createStore(
  rootReducer,
  // Questa riga abilita l'estensione Redux DevTools nel browser,
  // se installata. Non è obbligatoria, ma molto utile in sviluppo.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
