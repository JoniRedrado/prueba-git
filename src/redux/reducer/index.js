/* 4️⃣ ***REDUCER*** 4️⃣ */

/* Importa las action-types aquí. */

const initialState = {
   futbolistas: [],
   futbolistaDetail: {},
};

/*
En este ejercicio tendrás que crear los casos de un reducer para gestionar la información de tu estado global.
📢¡Sigue las instrucciones de los tests!📢
REQUISITOS:
🟢 Crea un caso default, que devuelva el estado global sin cambios.

🟢 Crea un caso en el que, dentro del estado "futbolistas", se guarden todos los futbolistas.

🟢 Crea un caso en el que, dentro del estado "futbolistaDetail", se guarde el detalle de un futbolista.

🟢 Crea un caso en el que, dentro del estado "futbolistas", se agregue un nuevo futbolista.
    [PISTA]: puedes utilizar el spread operator.

🟢 Crea un caso en el que, dentro del estado "futbolistas", se elimine aquel futbolista cuyo ID es igual al recibido.

*/

const rootReducer = (state = initialState, action) => {
   switch (
      action.type
      // Acá va tu código:
   ) {
   }
};

export default rootReducer;
