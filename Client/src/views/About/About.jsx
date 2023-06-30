import React from 'react';
import nene from '../../assets/img/nene.png';
import style from './About.module.css'

export default function About() {
  return (
    <div className={style.container} >
      <h1>Aca sobre mi :</h1>
      <p>Gabriel Lossada Alumno de Henry</p>
      <h5>YO:</h5>
      <img className={style.img} src={nene} alt="" />
    </div>
  );
}
