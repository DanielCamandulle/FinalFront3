import { createContext, useReducer } from "react";

// Define el estado inicial
export const initialState = localStorage.getItem('theme') || "light";

// Crea un contexto global
export const GlobalContext = createContext({});

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, initialState);
  const value = { theme, dispatch };
 // console.log(theme);

  return (
    <GlobalContext.Provider value={{ value }}>
      {children}
    </GlobalContext.Provider>
  );
};
