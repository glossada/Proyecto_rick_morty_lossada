import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  if (character) {
    return (
      <div>
        <h1>{character.name}</h1>
        <h3>wanted: {character?.status}</h3>
        <h3>Species: {character?.species}</h3>
        <h3>Gender: {character?.gender}</h3>
        <h3>Origin: {character.origin?.name}</h3>
        <img src={character.image} alt="" />
      </div>
    );
  } else {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  }
}

export default Detail;
