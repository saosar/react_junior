import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

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

function App() {
  const {     //TRAEMOS UN OBJETO{}
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
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