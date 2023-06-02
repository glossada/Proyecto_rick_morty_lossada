import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import {orderCards,filterCards} from '../../redux/actions'
import { useState  } from 'react';

export const Favorites = (props) => {
    const [aux, setAux] = useState(false);
    const dispatch=useDispatch();
    const myFavorites= useSelector((state) => state.myFavorites);
    
    const handleOrder = (event)=>{
      dispatch(orderCards(event.target.value));
      if(aux===true){
        setAux(false)
      }
      if(aux===false){
        setAux(true);                
      }
    }

    const handleFilter = (event)=>{
      dispatch(filterCards(event.target.value));
    }


  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      {myFavorites.map(persona => {
         return <Card key={persona.id}
         id={persona.id}
         name={persona.name}
         image={persona.image}
         status={persona.status}
         species={persona.species}
         gender={persona.gender}
         origin={persona.origin.name}
      />
      })}
    </div>
  )
}
