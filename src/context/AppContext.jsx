import { createContext, useContext, useReducer, useEffect } from "react";

const AppContext = createContext();

const initialState = {
  theme: localStorage.getItem("theme") || "light",
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
};

function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "LOGIN":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("isAuthenticated", state.isAuthenticated);
  }, [state.user, state.isAuthenticated]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
