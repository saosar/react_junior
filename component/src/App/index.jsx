import React from 'react';
import { AppUI } from './AppUI';

// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar el cabello', completed: true },
//   { text: 'Tomar el curso de React', completed: false },
//   { text: 'Bañarse', completed: true },
//   { text: 'Reunión Indatum 2pm', completed: false },
// ];


//* HOOK #1 *// para no poner tanto React.useStage
function useLocalStorage (itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem) {   //SI NUNCA HAN CREADO ALGO //SI SI HAN HECHO TODOS
    localStorage.setItem(itemName, JSON.stringify(initialValue)); //EN CONSOLA APARECE ARRAY VACIO
    parsedItem = initialValue; // ESTADO POR DEFECTO ES ARRAY VACIO
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = React.useState(parsedItem);  //defaultTodos vs parsedTodos

  const saveItem = (newItem) => { //VAMOS A GUARDAR EL ESTADO NO SOLO EN TODO SINO EN LOCALSTORAGE
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem); // SE GUARDA EN INFO PAGINA
    setItem(newItem);   //SI SE BORRA SE BORRA - SE PERSISTEN DATOS
  }; //GUARDA ACTUALIZACION LOCAL STORAGE Y ESTADO DE REACT

  return [
    item,
    saveItem,   
  ];
}



function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  
  // El estado de nuestra búsqueda
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  
  //FILTRAR
  let searchedTodos = [];   //SI EL USUARIO NO ESCRIBE NADA, VA A SER IGUAL A LISTA DE Todos, SI USUARIO ESCRIBE ALGO es setTodos
  // Lógica para filtrar
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {     // SE SACA LA VARIABLE DONDE EL USUARIO INGRESA DATOS
      const todoText = todo.text.toLowerCase();    // NO IMPORTA SI MAYUSCULA O MINUSCULA --CONVIERTE A minuscula
      const searchText = searchValue.toLowerCase(); //
      return todoText.includes(searchText);    // EL TEXTO INCLUYE ALGO DE LO QUE SE PUSO EN BUSQUEDA?
    });
  }



////MARCAR COMO COMPLETADO
  const completeTodo = (text) => { // el complete ingresa el texto de los todos
    const todoIndex = todos.findIndex(todo => todo.text === text); // busca la posición dentro del array
    const newTodos = [...todos];   //strange operator... ingresa todos los todo    clonar la lista de todos
    newTodos[todoIndex].completed = true; 
    // todos[todoIndex] = {    //FORMA 2 DE LO ANTERIOR
    //   text: todos[todoIndex].text;  // el texto se busca a si mismo en el texto con la posicion
    //   completed: true;
    // }
    saveTodos(newTodos);   // RE RENDER RECIBE NUEVA LISTA DE TODOS
  };
 
///// BORRAR CON LA X 
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);  //splice es para BORRARRRR !! cortar rebanada de pan desde la posicion todoindex, sacar 1 rebanada (1 todo)
    saveTodos(newTodos);
  };

  //* HOOK #2 *// para el uso de efectos ejemplo consumo de API, carga, error o espera.
  // React.useEffect(funcion, [dato1, dato2, datoN])
  
  return (   // MANDAR LAS PROPIEDADES QUE SE LLAMAN EN AppUI
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    
    />
  );
}

export default App;
