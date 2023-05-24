/* 8️⃣ ***COMPONENTE FutbolistaDetail*** 8️⃣

Implementar el componente FutbolistaDetail. En este ejercicio tendrás que renderizar las diferentes propiedades del futbolista.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que despachar una action con el "id" del futbolista cuando se monta el componente. Luego, traer esa 
información de tu estado global.

🟢 Tendrás que renderizar algunos datos del futbolista correspondiente.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser FUNCIONAL.
❗Para obtener el id puedes utilizar useParams.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      -'React.useState' - 'React.useEffect';
*/
import "./FutbolistaDetail.css"

import React from 'react';

const FutbolistaDetail = (props) => {
   return (
   <div className="detail">

   </div>
   )
};

export default FutbolistaDetail;
