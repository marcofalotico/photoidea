// src/redux/uiReducer.js
// Questo reducer gestisce lo "stato di interfaccia":
// - quale servizio è selezionato
// In un'altra app qui si potrebbero mettere anche loading, modali, ecc.

import { SET_SELECTED_SERVICE } from "./actions.js";

const initialUiState = {
  selectedServiceId: null,
};

export function uiReducer(state = initialUiState, action) {
  // Un reducer è una funzione *pura*: dato uno stato e un'azione,
  // restituisce un nuovo stato senza effetti collaterali.
  switch (action.type) {
    case SET_SELECTED_SERVICE:
      return {
        ...state,
        selectedServiceId: action.payload,
      };

    default:
      return state;
  }
}
