import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  GET_FAVORITES,
} from "../actions/favorite";

export const initialState = {
  favorites: [],
};

export const favoriteReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITES: {
      return {
        favorites: [...state.favorites, action.payload.data],
      };
    }
    case DELETE_FAVORITES: {
      return {};
    }
    case GET_FAVORITES: {
      console.log("get_favorite", state.favorites);
      return state.favorites;
    }
    default:
      return state;
  }
};
