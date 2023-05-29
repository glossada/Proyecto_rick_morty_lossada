import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./nav.module.css";
import { Link, useLocation} from 'react-router-dom';

export default function Nav(props){

    if(useLocation().pathname==='/'){
        return null;
    }

    return(
        <div className={style.container}>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <Link to="/favorites">Favorites</Link>
         <h1 className={style.titulo}>WANTED</h1>
         <SearchBar onSearch={props.onSearch} />
      </div>

    );
}