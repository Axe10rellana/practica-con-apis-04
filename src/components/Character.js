//importaciones
import React from "react";

//react-router
import { Link } from "react-router-dom";

//estilos css
import "../styles/Character.css";

const Character = ({ character }) => {
  //variables
  let id = character?.id;
  let imagen = character?.images?.[1] || character?.images?.[0];
  let nombre = character?.name || "Sin Nombre";
  let ocupacion = character?.info?.Ocupação;

  return (
    <>
      <li className="li">
        <Link to={`/characters/${id}`} className="li__link">
          <div className="li__img__container">
            <img className="li__img" src={imagen} alt={nombre} title={nombre} />
          </div>
          <div className="li__information">
            <h2 className="li__title">Nombre: {nombre}</h2>
            {ocupacion ? (
              <p className="li__text">Ocupación: {ocupacion}</p>
            ) : (
              ""
            )}
          </div>
        </Link>
      </li>
    </>
  );
};

export default Character;
