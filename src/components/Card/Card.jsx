import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addFav,removeFav } from "../../redux/actions";
import { useState } from "react";


export default function Card(props) {

  const dispatch=useDispatch();
  const [ isFav,setIsFav]= useState(false);

  const handleFavorite=(props,id)=>{
    if(isFav===true){
      setIsFav(false);
      dispatch(removeFav(id));
    }
    if(isFav===false){
      setIsFav(true);
      dispatch(addFav(props));
    }
  }

  return (
    <div className={style.card}>
      <button className={style.button} onClick={() => props.onClose(props.id)}>
        [ X ]
      </button>
      <div className={style.nombre}>
        <Link to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
      </div>
      <img className={style.img} src={props.image} alt="" />
      <div className={style.inferior}>
        <div className={style.origin}>
          <h2>{props.origin}</h2>
        </div>
        <div className={style.specs}>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
        </div>
        <div className={style.status}>
          <h2>Wanted: {props.status}</h2>
        </div>
      </div>
    </div>
  );
}
