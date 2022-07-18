import { createContext, useContext } from "react";

const ThemeProvider = createContext({
  light: {},
});

const ThemeContext = () => {
  const context = useContext("light");
};
