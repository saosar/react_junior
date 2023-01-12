import React from 'react';
import { TodoContext } from '../TodoContext'
import './TodoCounter.css';

// Desestructuramos los props que pasamos al componente
function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <header>
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} Tareas</h2>
    </header>
    
  );
}

export { TodoCounter };