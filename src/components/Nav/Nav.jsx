/* 2️⃣ ***COMPONENTE NAV*** 2️⃣
Implementar el componente Nav. En este ejercicio tendrás que asociar dos etiquetas Link to='' a 
distintos elementos.

REQUISITOS
🟢 El primer <Link> debe dirigir a "/" con el texto "Home".
🟢 El segundo <Link> debe dirigir a "/futbolistas/create" con el texto "Create Futbolista".

IMPORTANTE
❗Este componente debe ser FUNCIONAL.
*/

import './nav.css';
import {Link} from 'react-router-dom'
import React from 'react';
import {ROUTES} from '../../routes'

const Nav = () => {
   return <div className='nav'>
      <Link to={ROUTES.home}>Home</Link>
      <Link to={ROUTES.createFutbolista}>Create Futbolista</Link>
   </div>;
};

export default Nav;
