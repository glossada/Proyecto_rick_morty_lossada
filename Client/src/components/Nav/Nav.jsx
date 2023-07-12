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
            <div className={style.links}>
        <Link className={style.link} to="/about">About</Link>
        <Link className={style.link} to="/home">Home</Link>
        <Link className={style.link} to="/favorites">Favorites</Link>
            </div>
         <h1 className={style.titulo}>wanted</h1>
         <SearchBar onSearch={props.onSearch} />
      </div>

    );
}