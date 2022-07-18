import { createContext, useContext, useReducer } from "react";
import { ADD_FAVORITES, DELETE_FAVORITES } from "../actions/favorite";
import { favoriteReducer, initialState } from "../reducers/favorites";

export const FavoriteContext = createContext();
const { Provider } = FavoriteContext;

export const FavoriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  const addFavorite = ({ data }) => {
    dispatch({ type: ADD_FAVORITES, payload: data });
  };

  const deleteFavorite = () => {};

  return <Provider value={{ addFavorite }}>{children}</Provider>;
};
