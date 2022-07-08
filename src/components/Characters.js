//importaciones
import React from "react";

//componentes
import Character from "./Character";
import Loader from "./Loader";

//estilos css
import "../styles/Characters.css";

const Characters = ({ charactersData, search, loading, error }) => {
  const filteredCharacters = charactersData.filter(
    (character) =>
      character?.name?.toLowerCase().includes(search.toLowerCase()) ||
      character?.info?.Sexo?.toLowerCase().includes(search.toLowerCase()) ||
      character?.info?.Parceiro?.toLowerCase().includes(search.toLowerCase()) ||
      character?.info?.Ocupação?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ul>
        {loading && <Loader />}
        {error && <p>{error.message}</p>}
      </ul>
      <ul className="list">
        {charactersData &&
          filteredCharacters?.map((character) => (
            <Character key={character?.id} character={character} />
          ))}
      </ul>
    </>
  );
};

export default Characters;
