// src/redux/actions.js
// Tutti i tipi di azione e gli "action creator".

// ------------------------
// UI (interfaccia)
// ------------------------
export const SET_SELECTED_SERVICE = "SET_SELECTED_SERVICE";

// Nuove azioni per il form contatti
export const SET_CONTACT_SERVICE = "SET_CONTACT_SERVICE";
export const CLEAR_CONTACT_SERVICE = "CLEAR_CONTACT_SERVICE";

export function setSelectedService(serviceId) {
  // Action creator per aggiornare il servizio selezionato nella pagina Servizi
  return {
    type: SET_SELECTED_SERVICE,
    payload: serviceId,
  };
}

// Quando l'utente clicca "Chiedi informazioni" da una pagina servizio,
// salviamo in Redux il nome del servizio, per precompilarlo nel form contatti.
export function setContactService(serviceLabel) {
  return {
    type: SET_CONTACT_SERVICE,
    payload: serviceLabel,
  };
}

// Usiamo questa azione per azzerare il servizio precompilato dopo l'invio del form
// o quando lasciamo la pagina contatti.
export function clearContactService() {
  return {
    type: CLEAR_CONTACT_SERVICE,
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
