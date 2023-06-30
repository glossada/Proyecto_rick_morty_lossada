// import { map } from '@11ty/eleventy/src/TemplateGlob';
import Card from '../Card/Card';
import style from "./Cards.module.css";

export default function Cards(props) {
   return (
   <div className={style.general} >
      <div className={style.data}>
      {props.characters.map(persona => {
         return <Card key={persona.id}
         id={persona.id}
         name={persona.name}
         image={persona.image}
         status={persona.status}
         species={persona.species}
         gender={persona.gender}
         origin={persona.origin.name}
         onClose={props.onClose}
      />
      })}
      </div>
   </div>
   );
}
