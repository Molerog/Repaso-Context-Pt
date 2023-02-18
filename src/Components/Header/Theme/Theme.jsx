import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";


export const Theme = ()=>{
    const {theme,handleTheme} = useContext(GlobalContext);
    return(
        <span onClick={handleTheme}>{theme}</span>
   )
}