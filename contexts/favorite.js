import { createContext, useContext, useReducer } from "react";
import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  GET_FAVORITES,
} from "../actions/favorite";
import { favoriteReducer, initialState } from "../reducers/favorites";

export const FavoriteContext = createContext();
const { Provider } = FavoriteContext;

export const FavoriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  const addFavorite = (data) => {
    dispatch({ type: ADD_FAVORITES, payload: data });
  };

  const deleteFavorite = ({ id }) => {
    dispatch({ type: DELETE_FAVORITES, payload: id });
  };

  const getFavorite = () => {
    dispatch({ type: GET_FAVORITES });
  };

  return (
    <Provider value={{ state, addFavorite, deleteFavorite, getFavorite }}>
      {children}
    </Provider>
  );
};
