import { ADD_FAVORITES, DELETE_FAVORITES } from "../actions/favorite";

export const initialState = {
  favorites: [],
};

export const favoriteReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITES: {
      return {
        favorites: [...favorites, action.payload],
      };
    }
    case DELETE_FAVORITES: {
      return {};
    }
    default:
      return state;
  }
};
