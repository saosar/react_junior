import React from 'react'

function useLocalStorage(itemName, initialValue) {
    // Creamos el estado inicial para nuestros errores y carga
   const [error, setError] = React.useState(false); // CREAR ESTADO DE ERROR
   const [loading, setLoading] = React.useState(true);   // CREAR ESTADO DE CARGA
   const [item, setItem] = React.useState(initialValue);  //VALOR INICIAL POR DEFECTO
   
   React.useEffect(() => {   // 
     // Simulamos un segundo de delay de carga 
     setTimeout(() => {
        // Manejamos la tarea dentro de un try/catch por si ocurre algún error
       
        try {  //ejecuta cierta parte del codigo y reacciona al ERROR !!!!111
         const localStorageItem = localStorage.getItem(itemName);
         let parsedItem;
         
         if (!localStorageItem) {
           localStorage.setItem(itemName, JSON.stringify(initialValue));
           parsedItem = initialValue;
         } else {
           parsedItem = JSON.parse(localStorageItem);
         }
 
         setItem(parsedItem);  //cuando pase el tiempo llama a setItem para actualizar el estado
         setLoading(false);     //TODO FUNCIONO EN LA CARGA
       } catch(error) {
         // En caso de un error lo guardamos en el estado
         setError(error);
       }
     }, 1000);   ///que espere un segundo
   });
   
   const saveItem = (newItem) => { 
     try {
       const stringifiedItem = JSON.stringify(newItem);
       localStorage.setItem(itemName, stringifiedItem);
       setItem(newItem);
     } catch(error) {
       setError(error);
     }
   };
 
   return {   // CUANDO HAY MAS DE UN ESTADO ES MEJOR UN OBJETO{} QUE UN ARRAY[]
     item,
     saveItem,
     loading,
     error,
   };
 }
 
 export { useLocalStorage };