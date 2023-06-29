/* 1️⃣ ***COMPONENTE APP*** 1️⃣
Implementar el componente App. En este ejercicio tendrás que crear diferentes rutas para otros componentes. 
¡Ten en cuenta los nombres y las especificaciones de cada uno!

REQUISITOS
🟢 El componente Nav debe renderizarse en todas las rutas.
🟢 El componente Home debe renderizarse en la ruta "/".
🟢 El componente FutbolistaDetail debe renderizarse en la ruta "/futbolistas/:id".
🟢 El componente CreateFutbolista debe renderizarse en la ruta "/futbolista/create".
*/

import React from 'react';
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav/Nav'
import FutbolistaDetail from './components/FutbolistaDetail/FutbolistaDetail';
import CreateFutbolista from './components/CreateFutbolista/CreateFutbolista';
import Home from './components/Home/Home'

import {ROUTES} from './routes'

const App = () => {


   return (
      <>
         <Nav />
         <Routes>
            <Route path={ROUTES.home} element={<Home />}></Route>
            <Route path={ROUTES.futbolistaDetail+":id"} element={<FutbolistaDetail/>}></Route>
            <Route path={ROUTES.createFutbolista} element={<CreateFutbolista/>}></Route>
         </Routes>

      </>
   );
};
export default App;
