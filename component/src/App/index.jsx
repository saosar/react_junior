import React from 'react';
import { AppUI } from './AppUI';

// import './App.css';

const defaultTodos = [
  { text: 'Cortar el cabello', completed: true },
  { text: 'Tomar el curso de React', completed: false },
  { text: 'Bañarse', completed: true },
  { text: 'Reunión Indatum 2pm', completed: false },
];

function App() {

  // const localStorageTodos = localStorage.getItem('TODOS_V1');
  // let parsedTodos;

  // if (!localStorageTodos) {   //SI NUNCA HAN CREADO ALGO //SI SI HAN HECHO TODOS
  //   localStorage.setItem('TODOS_V1', JSON.stringify([]));
  //   parsedTodos = [];
  // } else {
  //   parsedTodos = JSON.parse(localStorageTodos);
  // }


  const [todos, setTodos] = React.useState(defaultTodos);  //defaultTodos vs parsedTodos
  // El estado de nuestra búsqueda
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  
  //FILTRAR
  let searchedTodos = [];   //SI EL USUARIO NO ESCRIBE NADA, VA A SER IGUAL A LISTA DE todos, SI USUARIO ESCRIBE ALGO es setTodos
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
    setTodos(newTodos);   // RE RENDER RECIBE NUEVA LISTA DE TODOS
  };
 
///// BORRAR CON LA X 
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);  //splice es para BORRARRRR !! cortar rebanada de pan desde la posicion todoindex, sacar 1 rebanada (1 todo)
    setTodos(newTodos);
  };
  
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
