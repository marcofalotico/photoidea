// src/redux/galleryReducer.js
// Reducer per lo stato della galleria protetta.

import {
  GALLERY_LOGIN_SUCCESS,
  GALLERY_LOGIN_FAILURE,
  GALLERY_LOGOUT,
} from "./actions.js";

const initialGalleryState = {
  isAuthenticated: false,
  error: null,
};

export function galleryReducer(state = initialGalleryState, action) {
  switch (action.type) {
    case GALLERY_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        error: null,
      };

    case GALLERY_LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };

    case GALLERY_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        error: null,
      };

    default:
      return state;
  }
}
