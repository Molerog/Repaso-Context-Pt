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

  function languageSelection(language) {
    if (language === "ES") return "EN";
    if (language === "EN") return "ES";
  }

  function handleLanguage(string) {
    let language = string.target.innerText;
    const selection = languageSelection(language);
    return dispatch({
      type: "GET_SELECTED_LANGUAGE",
      payload: selection,
    });
  }

  function themeSelection(theme) {
    if (theme === "☀️") return "🌙";
    if (theme === "🌙") return "☀️";
  }

  function handleTheme(string) {
    let theme = string.target.innerText;
    const style = themeSelection(theme);
    return dispatch({
      type: "GET_SELECTED_THEME",
      payload: style,
    });
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
        selectedTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
