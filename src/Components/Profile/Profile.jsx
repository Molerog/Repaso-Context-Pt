import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./Profile.css";
export const Profile = () => {
  const { user, selectedTheme } = useContext(GlobalContext);
  const theme = selectedTheme();
  const userProfile = Object.entries(user).map(([property, value]) => {
    return (
      <div key={value}>
        <p>
          {property} : {value}
        </p>
      </div>
    );
  });
  return <div className={`profile-container ${theme}`}>{userProfile}</div>;
};
