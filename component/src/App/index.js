import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
// import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
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
  




  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {/* Regresamos solamente los TODOs buscados */}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)} 
            ondelete={() => deleteTodo(todo.text)} 
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;