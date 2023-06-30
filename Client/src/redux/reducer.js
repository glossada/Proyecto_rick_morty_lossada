import { ADD_FAV,REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters:[],
    
 };

 const rootReducer = (state = initialState, action) => {
    switch (action.type) {
       case ADD_FAV:
         return { ...state, myFavorites: action.payload, allCharacters: action.payload };
       
       case REMOVE_FAV:
         return { ...state, myFavorites: action.payload };

       case FILTER:
         let copy2 = [...state.allCharacters];
         let filteredCharacters = copy2.filter((character) => character.gender === action.payload);
         return { ...state, myFavorites: filteredCharacters };

       case ORDER:
         let copy3 = [...state.allCharacters];
      if (action.payload === "A") {
        copy3.sort((a, b) => a.id - b.id); // Orden ascendente
      } else if (action.payload === "D") {
        copy3.sort((a, b) => b.id - a.id); // Orden descendente
      }
      return { ...state, myFavorites: copy3 };

       
       default:
          return {...state};
    }
 };
 
 export default rootReducer;

