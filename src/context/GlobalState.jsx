import { createContext, useReducer } from "react";
import { Appreducer } from "./Appreducer";
import { translations } from "../helpers/languagesForm";
const initialState = {
  user: {},
  language: "ES",
  theme: "☀️",
};

export const GlobalContext = createContext();

export const GlobalProdiver = ({ children }) => {
  const [state, dispatch] = useReducer(Appreducer, initialState);

  function userData(object) {
    dispatch({
      type: "GET_USER_DATA",
      payload: object,
    });
  }

  function handleLanguage(string) {
    let language = string.target.innerText;
    if (language === "ES") {
      language = "EN";
      return dispatch({
        type: "GET_SELECTED_LANGUAGE",
        payload: language,
      });
    }
    if (language === "EN") {
      language = "ES";
      return dispatch({
        type: "GET_SELECTED_LANGUAGE",
        payload: language,
      });
    }
  }
  function handleTheme(string) {
    let theme = string.target.innerText;
    if (theme === "☀️") {
      theme = "🌙";
      return dispatch({
        type: "GET_SELECTED_THEME",
        payload: theme,
      });
    }
    if (theme === "🌙") {
      theme = "☀️";
      return dispatch({
        type: "GET_SELECTED_THEME",
        payload: theme,
      });
    }
  }

  const selectedTranslation = () => {
    return translations[state.language];
  };

  const selectedTheme = () => {
    if (state.theme === "🌙") return "dark";

    if (state.theme === "☀️") return "light";
  };

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        userData,
        handleLanguage,
        language: state.language,
        selectedTranslation,
        theme: state.theme,
        handleTheme,
        selectedTheme
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
