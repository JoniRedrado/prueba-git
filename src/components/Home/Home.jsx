/*5️⃣ ***COMPONENTE Home*** 5️⃣

Implementar el componente Home. Este deberá renderizar todos los futbolistas (Cards) que contengan la 
información consumida directamente del estado global de Redux. 
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que conectar el componente con el estado global de Redux mediante dos funciones: mapStateToProps y 
mapDispatchToProps.

🟢 Tendrás que renderizar una serie de etiquetas HTML con información dentro.

🟢 Tendrás que mappear tu estado global para luego renderizar su información utilizando el componente <FutbolistaCard />.

IMPORTANTE
❗Este componente debe ser de CLASE.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
 [Ej]: import * as actions from "./../../redux/actions/index";

*/

import * as actions from "../../redux/actions/index";

import "./home.css";
import React, { Component } from "react";
import { connect } from "react-redux";

import FutbolistaCard from "../FutbolistaCard/FutbolistaCard";
import img from "../../img-cp2/main-image-cp2.jpg";
export class Home extends Component {

   componentDidMount() {
      this.props.getAllFutbolistas();
   }
   
   render() {
      return (
         <div className="home">
         <h1>Mundial Qatar</h1>
         <img src={img} alt="mundial-logo" />
         <h3>Futbolistas:</h3>
         {this.props.futbolistas ? 
            this.props.futbolistas.map((futbolista) => {
            return (
               <FutbolistaCard
               id={futbolista.id}
               name={futbolista.name}
               pais={futbolista.pais}
               imagen={futbolista.imagen}
               key={futbolista.id}
               />
            );
         }) : <h3>Loading...</h3>}
         <h4>Checkpoint M2</h4>
         </div>
      );
   }
   }

   export const mapStateToProps = (state) => {
      return {
         futbolistas: state.futbolistas,
      };
   };


   export const mapDispatchToProps = (dispatch) => {
   return {
      getAllFutbolistas: () => {
         dispatch(actions.getAllFutbolistas());
      },
   };
   };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
