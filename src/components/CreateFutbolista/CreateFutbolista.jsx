/* 6️⃣ ***COMPONENTE CreateFutbolista*** 6️⃣

Implementar el componente CreateFutbolista. Este consistirá en un formulario controlado con estados de react.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.

🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".

🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.

🟢 Debes manejar los errores que pueden tener los inputs del formulario.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/

import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index";
import { validation } from "../../validation";

const CreateFutbolista = () => {
  const [futbolista, setFutbolista] = React.useState({
    name: "",
    pais: "",
    posición: "",
    numeroCamiseta: 0,
    imagen: "",
    nacimiento: "",
    descripción: "",
  });

  const dispatch = useDispatch();

  const createFutbolista = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0)
      dispatch(actions.createFutbolista(futbolista));
  };

  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    setFutbolista({ ...futbolista, [e.target.name]: e.target.value });
    setErrors(
      validation({
        ...futbolista,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <form onSubmit={createFutbolista}>
      <label>Name: </label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={futbolista.name}
      ></input>
      {errors.name && <p>{errors.name}</p>}

      <label>Pais: </label>
      <input
        type="text"
        name="pais"
        onChange={handleChange}
        value={futbolista.pais}
      ></input>
      {errors.pais && <p>{errors.pais}</p>}
      <label>Posición: </label>

      <input
        type="text"
        name="posición"
        onChange={handleChange}
        value={futbolista.posición}
      ></input>
      <label>Descripción: </label>
      <textarea
        name="descripción"
        onChange={handleChange}
        value={futbolista.descripción}
      ></textarea>

      <label>Numero Camiseta: </label>
      <input
        type="number"
        name="numeroCamiseta"
        onChange={handleChange}
        value={futbolista.numeroCamiseta}
      ></input>
      {errors.numeroCamiseta ? <p>{errors.numeroCamiseta}</p> : <></>}

      <label>Imagen: </label>
      <input
        type="text"
        name="imagen"
        onChange={handleChange}
        value={futbolista.imagen}
      ></input>

      <label>Nacimiento: </label>
      <input
        type="text"
        name="nacimiento"
        onChange={handleChange}
        value={futbolista.nacimiento}
      ></input>
      <button type="submit">Crear Jugador</button>
    </form>
  );
};
/*
{errors.name ? <p>{errors.name}</p> : <></>}
{errors.numeroCamiseta ? <p>{errors.numeroCamiseta}</p> : <></>}
*/
export default CreateFutbolista;
