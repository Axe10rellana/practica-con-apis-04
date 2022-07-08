//importaciones
import React, { useState, useEffect } from "react";

//react-router
import { useParams, Link } from "react-router-dom";

//componentes
import Loader from "../components/Loader";

//estilos css
import "../styles/CharacterId.css";

const CharacterId = () => {
  //variables de estado
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  //react-router
  const params = useParams();

  //useEffect
  useEffect(() => {
    const getCharacter = async () => {
      try {
        const response = await fetch(
          `https://naruto-api.herokuapp.com/api/v1/characters/${params.id}`
        );

        if (!response.ok)
          throw new Error("Error: No se pudieron cargar los datos de la api");

        const data = await response.json();

        setLoading(false);
        setError("");
        setCharacter(data);
      } catch (err) {
        let errMessage = `${err.status}: ${err.statusText || err.message}`;
        setLoading(false);
        setError(errMessage);
        setCharacter([]);
        console.error(err.message);
      }
    };

    getCharacter();
  }, [params.id]);

  //variables
  let imagen = character?.images?.[1] || character?.images?.[0];
  let nombre = character?.name || "Sin Nombre";
  let sexo = character?.info?.Sexo;
  let estado = character?.info?.Estado;
  let especie = character?.info?.Espécie;
  let edad = character?.info?.Idade;
  let altura = character?.info?.Altura;
  let peso = character?.info?.Peso;
  let clan = character?.info?.Clã;
  let cumpleanios = character?.info?.Aniversário;
  let clasificacion = character?.info?.Classificação;
  let ocupacion = character?.info?.Ocupação;
  let afiliacion = character?.info?.Afiliação;
  let tiempos = character?.info?.Times;
  let colega = character?.info?.Parceiro;
  let acerca = character?.about;
  let pagina = character?.page;

  return (
    <>
      <ul>
        {loading && <Loader />}
        {error && <p>{error.message}</p>}
      </ul>
      <article className="card">
        <div className="card__img__container">
          <img className="card__img" src={imagen} alt={nombre} title={nombre} />
        </div>
        <div className="card__information">
          <h1 className="card__title">Nombre: {nombre}</h1>
          <h2 className="card__subtitle">Información</h2>
          {sexo ? <p className="card__text">Género: {sexo}</p> : ""}
          {estado ? <p className="card__text">Estado: {estado}</p> : ""}
          {especie !== undefined ? (
            <p className="card__text">Especie: {especie}</p>
          ) : (
            ""
          )}
          {edad ? <p className="card__text">Edad: {edad}</p> : ""}
          {altura ? <p className="card__text">Altura: {altura}</p> : ""}
          {peso ? <p className="card__text">Peso: {peso}</p> : ""}
          {clan ? <p className="card__text">Clan: {clan}</p> : ""}
          {cumpleanios ? (
            <p className="card__text">Cumpleaños: {cumpleanios}</p>
          ) : (
            ""
          )}
          {clasificacion ? (
            <p className="card__text">Clasificación: {clasificacion}</p>
          ) : (
            ""
          )}
          {ocupacion ? (
            <p className="card__text">Ocupación: {ocupacion}</p>
          ) : (
            ""
          )}
          {afiliacion ? (
            <p className="card__text">Afiliación: {afiliacion}</p>
          ) : (
            ""
          )}
          {tiempos ? <p className="card__text">Tiempos: {tiempos}</p> : ""}
          {colega ? <p className="card__text">Colega: {colega}</p> : ""}
          <h2 className="card__subtitle__descripcion">Descripción</h2>
          {acerca
            ? acerca?.map((info, index) => (
                <p className="card__text" key={index}>
                  {info}
                </p>
              ))
            : ""}
          {pagina ? (
            <a
              className="card__link"
              href={pagina}
              target="_blank"
              rel="noreferrer"
            >
              Más Información
            </a>
          ) : (
            <p className="card__text">Sin Página Oficial</p>
          )}
        </div>
      </article>
      <Link to="/" className="card__button">
        Volver
      </Link>
    </>
  );
};

export default CharacterId;
