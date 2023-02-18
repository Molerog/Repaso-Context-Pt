import React, { useContext } from "react";
import "../Header/Header.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Language } from "./Language/Language";
import { GlobalContext } from "../../context/GlobalState";
import { Theme } from "./Theme/Theme";

export const Header = () => {
  const { pathname } = useLocation();
  const { selectedTranslation } = useContext(GlobalContext);
  const translation = selectedTranslation();
  if (pathname === "/")
    return (
      <div className="icons-container">
        <Theme />
        <Language />
      </div>
    );
  if (pathname === "/home")
    return (
      <>
        <div className="icons-container">
          <Theme />
          <Language />
        </div>
        <div className="header-container">
          <Link to="/">{translation.register}</Link>
          <Link to="/profile">{translation.profile}</Link>
        </div>
      </>
    );
  if (pathname === "/profile")
    return (
      <>
        <div className="icons-container">
          <Theme />
          <Language />
        </div>
        <div className="header-container">
          <Link to="/home">{translation.home}</Link>
          <Link to="/profile">{translation.profile}</Link>
        </div>
      </>
    );
};
