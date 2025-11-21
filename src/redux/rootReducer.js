// src/redux/rootReducer.js
// Combina i vari reducer per dominio in un unico rootReducer.

import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer.js";
import { galleryReducer } from "./galleryReducer.js";

// Lo stato globale avrà forma:
// {
//   ui: { selectedServiceId: ... },
//   gallery: { isAuthenticated: ..., error: ... }
// }
export const rootReducer = combineReducers({
  ui: uiReducer,
  gallery: galleryReducer,
});
