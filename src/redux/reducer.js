// src/redux/reducer.js
// Il reducer è una funzione pura che riceve:
// - lo stato corrente (state)
// - un oggetto azione (action)
// e restituisce un nuovo stato (immutabilità: non modifichiamo direttamente state).

import { SET_SELECTED_SERVICE } from "./actions.js";

// Stato iniziale globale dell'app.
// Qui potremo aggiungere:
// - selectedServiceId
// - selectedPortfolioCategory
// - eventuali flag (es. modale aperta/chiusa)
const initialState = {
  selectedServiceId: null,
};

// Reducer principale dell'app.
// Di solito in app più complesse si hanno più reducer combinati con combineReducers, ma per ora ne usiamo uno solo.
export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_SERVICE:
      // Restituiamo un NUOVO oggetto (spread operator ...state)
      // con la chiave updated selectedServiceId.
      return {
        ...state,
        selectedServiceId: action.payload,
      };

    // Importante: default deve sempre restituire lo stato corrente,
    // altrimenti Redux non sa cosa fare per le azioni che non riconosciamo.
    default:
      return state;
  }
}
