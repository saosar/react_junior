import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  // const onComplete = () => {    //ES UNA FUNCION DIGAMOS FALSA, QUE MUESTRA UN ALERT PERO NO HACE NADA
  //   alert('Ya completaste la tarea llamada: '+ props.text)
  // };

  // const ondelete = () => {
  //   alert('Ya borraste la tarea llamada: '+ props.text)
  // };


  return (
    <li className="TodoItem">
      <span 
       className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
       onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.ondelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };