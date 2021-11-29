import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IdContext } from "./AppContext";
import Logout from "./log/Logout";

const Navbar = () => {
  const id = useContext(IdContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img src="./img/icon2.png" alt="icon" />
              <h3>Grand Theft Data</h3>
            </div>
          </NavLink>
        </div>
        {id ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink exact to="/profil">
                <h5>Bienvenue {userData.pseudo}</h5>
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact to="/profil">
                <img src="./img/icons/login.svg" alt="login" />
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
