import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';

export const Favorites = (props) => {

    const myFavorites= useSelector((state) => state.myFavorites);

  return (
    <div>
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
