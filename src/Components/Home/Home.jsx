import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './Home.css'
export const Home = ()=>{
    const {user, selectedTranslation,selectedTheme} = useContext(GlobalContext);
    const theme = selectedTheme();
    const translation = selectedTranslation();
    return(
    <div className={`main-container ${theme}`}>
    <p>{translation.greetingUser} {user.name} {translation.midphrase} {user.language}. {translation.wishes}</p>
    </div>)
}