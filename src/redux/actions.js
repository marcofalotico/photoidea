// src/redux/actions.js
// In Redux definiamo:
// - costanti per i tipi di azione (stringhe)
// - funzioni "action creator" che restituiscono oggetti { type, payload? }
//
// In questa app, per iniziare, usiamo un singolo tipo di azione di esempio:
// - SET_SELECTED_SERVICE: memorizza qual è il servizio selezionato nel menu.

export const SET_SELECTED_SERVICE = "SET_SELECTED_SERVICE";

// Action creator: funzione che crea (restituisce) un oggetto azione.
// In Redux, le azioni sono oggetti JavaScript semplici con almeno una proprietà "type".
export function setSelectedService(serviceId) {
  return {
    type: SET_SELECTED_SERVICE,
    payload: serviceId,
  };
}
