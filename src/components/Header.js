//importaciones
import React from "react";

//importaciones
import { Link } from "react-router-dom";

//assets
import logo from "../assets/images/logo.png";

//estilos css
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__link">
        <img className="header__img" src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Header;
