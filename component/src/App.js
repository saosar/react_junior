import react from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom, CreateTodoButton } from "./CreateTodoButton.js";

const todos = [
  {text:'Cortar cebolla', completed:true},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];

function App() {   /* LLAMAR A DIFERENTES COMPONENTES */
  return (
   <react.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
            />
        ))}
      </TodoList>
      <CreateTodoButton />      
   </react.Fragment>
  );
}

export default App;