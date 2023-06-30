import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import style from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
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
      <div className={style.container}>
        <h1 className={style.name}>{character.name}</h1>
        <h3 className={style.info}>wanted: {character?.status}</h3>
        <h3 className={style.info}>Species: {character?.species}</h3>
        <h3 className={style.info}>Gender: {character?.gender}</h3>
        <h3 className={style.info}>Origin: {character.origin?.name}</h3>
        <img className={style.img} src={character.image} alt="" />
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
