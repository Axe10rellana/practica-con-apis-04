//importaciones
import React from "react";

//assets
import loader from "../assets/icons/oval.svg";

//estilos en objeto
const loaderStyles = {
  display: "block",
  margin: "2rem auto",
  width: "100px",
  height: "100px",
};

const Loader = () => {
  return (
    <div>
      <div>
        <img style={loaderStyles} src={loader} alt="Cargando..."></img>
      </div>
    </div>
  );
};

export default Loader;
