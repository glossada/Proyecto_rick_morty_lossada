import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addFav,removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";


export default function Card(props) {

  const dispatch=useDispatch();
  const myFavorites = useSelector((state)=>state.myFavorites);
  const [ isFav,setIsFav]= useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  const handleFavorite=()=>{
    if(isFav===true){
      setIsFav(false);
      dispatch(removeFav(props.id));
    }
    if(isFav===false){
      setIsFav(true);
      dispatch(addFav(props));
    }
  }
  const status=props.status.toUpperCase();

  return (
    <div className={style.card}>
      <button className={style.button} onClick={() => props.onClose(props.id)}>
        [ X ]
      </button>
      {
   isFav ? (
      <button className={style.cora} onClick={handleFavorite}>&#9733;</button>
   ) : (
      <button className={style.cora} onClick={handleFavorite}>&#9734;</button>
   )
}
      <div className={style.nombre}>
        <Link to={`/detail/${props.id}`} className={style.link}>
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
          <h2>wanted: {status}</h2>
          
        </div>
      </div>
    </div>
  );
}
