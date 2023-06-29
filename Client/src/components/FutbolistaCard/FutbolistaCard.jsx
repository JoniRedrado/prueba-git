/* 7️⃣ ***COMPONENTE FutbolistaCard*** 7️⃣

Implementar el componente FutbolistaCard.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que renderizar una serie de etiquetas HTML que incluyan texto y propiedades.
🟢 Tendrás que despachar una action para eliminar un jugador específico.

IMPORTANTE
❗Este componente debe ser FUNCIONAL.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/
import './futbolistaCard.css';
import React from 'react';
import * as actions from '../../redux/actions/index';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
 

const FutbolistaCard = (props) => {

   const dispatch = useDispatch();

   const handleDelete = ()=>{
      dispatch(actions.deleteFutbolista(props.id))
   }

   return (  
      <div>
         <button onClick={handleDelete}>x</button>
         <Link to={`/futbolistas/${props.id}`}>
            <h3>{props.name}</h3>
         </Link>
         <img src={props.imagen} alt={props.name} />
         <p>Pais: {props.pais}</p>
      </div>
   )
};

export default FutbolistaCard;
