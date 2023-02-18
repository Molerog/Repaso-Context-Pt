import React, { useContext } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

export const Register = () => {
  const { userData, selectedTranslation, selectedTheme } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const translation = selectedTranslation();
  const theme = selectedTheme();
  function dataHandler(e) {
    e.preventDefault();
    const object = new FormData(e.target);
    const data = Object.fromEntries(object);
    userData(data);
    navigate("/home");
  }

  return (
    <>
      <h2 className={`${theme}`}>{translation.formMessage}</h2>
      <div className={`register-container ${theme}`}>
        <form onSubmit={dataHandler} className="form-container">
          <label htmlFor="name">{translation.formularyName}</label>
          <input type="text" placeholder="name" id="name" name="name" />
          <label htmlFor="surname">{translation.formularySurname}</label>
          <input
            type="text"
            placeholder="surname"
            id="surname"
            name="surname"
          />
          <label htmlFor="password">{translation.formularyPassword}</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
          />
          <label htmlFor="Language">{translation.languageSelection}</label>
          <select name="language">
            <option value="Javascript">Javascript</option>
            <option value="Ruby">Ruby</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
            <option value="Ensamblador">Ensamblador</option>
          </select>
          <input type="submit" value={translation.submitValue} />
        </form>
      </div>
    </>
  );
};
