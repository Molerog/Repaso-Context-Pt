import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import "./Language.css";
export const Language = () => {
 const {handleLanguage, language} = useContext(GlobalContext)
  return (
      <span onClick={handleLanguage}>{language}</span>  
  );
};
