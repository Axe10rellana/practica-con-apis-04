//importaciones
import React from "react";

//react-router
import { Link } from "react-router-dom";

//assets
import error404 from "../assets/icons/error404.svg";

//estilos css
import "../styles/NotFound.css";

//estilos en objeto
const img404 = {
  width: "100%",
  maxWidth: "600px",
  height: "auto",
  display: "block",
  margin: "auto",
};

const wrapper = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const h1 = {
  fontSize: "3rem",
  textAlign: "center",
  color: "#61dafb",
};

const message404 = {
  fontSize: "1.5rem",
  padding: "20px",
  textAlign: "center",
  width: "60%",
  color: "#003f8c",
};

const NotFound = () => {
  return (
    <div>
      <img style={img404} src={error404} alt="Error404" />
      <div style={wrapper}>
        <h1 style={h1}>Página No Encontrada</h1>
        <p style={message404}>
          No existe la publicación o la ruta es incorrecta
        </p>
        <Link to="/" className="notfound__button">
          Volver
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
