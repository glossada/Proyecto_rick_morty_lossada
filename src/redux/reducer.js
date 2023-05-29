import { ADD_FAV,REMOVE_FAV } from "./actions";

const initialState = {
    myFavorites: [],
    
 };

 const rootReducer = (state = initialState, action) => {
    switch (action.type) {
       case ADD_FAV:
         let copy1 = state.myFavorites;
            copy1.push(action.payload)
          return {...state, myFavorites: copy1};
       
       case REMOVE_FAV:
          return {...state, myFavorites: state.myFavorites.filter((fav) => {return fav.id !== action.payload})}
       
       default:
          return {...state};
    }
 };
 
 export default rootReducer;

