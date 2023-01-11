import React from 'react';
// Importamos nuestro contexto
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { Bootstrap } from '../Bootstrap';

// import { Scroller } from '../Scroll';


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
  
    <React.Fragment>
      
      <TodoCounter />
      <TodoSearch />
      
        {/* RENDER PROPS QUE ENVIAN FUNCION DE LA SIGUIENTE MANERA */}
          
          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}            
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            

            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>   

          {!!openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
          
          <Bootstrap />

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {/* <Scroller></Scroller> */}
    </React.Fragment>
    
  );
}

export { AppUI };