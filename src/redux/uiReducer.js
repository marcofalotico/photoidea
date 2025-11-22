// src/redux/uiReducer.js
// Reducer per lo stato di interfaccia (UI).

import {
  SET_SELECTED_SERVICE,
  SET_CONTACT_SERVICE,
  CLEAR_CONTACT_SERVICE,
} from "./actions.js";

const initialUiState = {
  selectedServiceId: null,
  // Nuovo campo: il servizio pre-selezionato nel form contatti.
  // È utile quando arrivo alla pagina /contatti da un servizio specifico.
  contactService: "",
};

export function uiReducer(state = initialUiState, action) {
  switch (action.type) {
    case SET_SELECTED_SERVICE:
      return {
        ...state,
        selectedServiceId: action.payload,
      };

    case SET_CONTACT_SERVICE:
      return {
        ...state,
        contactService: action.payload,
      };

    case CLEAR_CONTACT_SERVICE:
      return {
        ...state,
        contactService: "",
      };

    default:
      return state;
  }
}
