// src/redux/actions.js
// Tutti i tipi di azione e gli "action creator".

// ------------------------
// UI
// ------------------------
export const SET_SELECTED_SERVICE = "SET_SELECTED_SERVICE";

export function setSelectedService(serviceId) {
  // Action creator per aggiornare il servizio selezionato
  return {
    type: SET_SELECTED_SERVICE,
    payload: serviceId,
  };
}

// ------------------------
// Galleria protetta
// ------------------------
export const GALLERY_LOGIN_SUCCESS = "GALLERY_LOGIN_SUCCESS";
export const GALLERY_LOGIN_FAILURE = "GALLERY_LOGIN_FAILURE";
export const GALLERY_LOGOUT = "GALLERY_LOGOUT";

// Password di esempio lato client (SOLO didattica, non produzione)
const CLIENT_GALLERY_PASSWORD = "photoidea2025";

// Versione semplice, senza middleware: ritorna SUBITO un oggetto azione.
// La logica di controllo password è in questo file.
export function attemptGalleryLogin(password) {
  const isOk = password === CLIENT_GALLERY_PASSWORD;

  return {
    type: isOk ? GALLERY_LOGIN_SUCCESS : GALLERY_LOGIN_FAILURE,
    payload: isOk ? null : "Password non corretta.",
  };
}

export function galleryLogout() {
  return {
    type: GALLERY_LOGOUT,
  };
}
