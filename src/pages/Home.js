//importaciones
import React, { useEffect, useState } from "react";

//componentes
import Characters from "../components/Characters";

//estilos css
import "../styles/Home.css";

const Home = () => {
  //variables de estado
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  //useEffect
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetch(
          "https://naruto-api.herokuapp.com/api/v1/characters"
        );

        if (!response.ok)
          throw new Error("Error: No se pudieron cargar los datos de la api");

        const data = await response.json();

        setLoading(false);
        setError("");
        setCharacters(data);
      } catch (err) {
        let errMessage = `${err.status}: ${err.statusText || err.message}`;
        setLoading(false);
        setError(errMessage);
        setCharacters([]);
        console.error(err.message);
      }
    };

    getCharacters();
  }, []);

  return (
    <>
      <input
        type="search"
        placeholder="Buscar un personaje"
        className="home__input"
        onChange={(e) => setSearch(e.target.value)}
        autoFocus
        autoComplete="off"
        required
      />
      <h2 className="home__title">Personajes</h2>
      <Characters
        charactersData={characters}
        search={search}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default Home;
