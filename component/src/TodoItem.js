import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const onComplete = () => {
    alert('Ya completaste la tarea llamada: '+ props.text)
  };

  const ondelete = () => {
    alert('Ya borraste la tarea llamada: '+ props.text)
  };


  return (
    <li className="TodoItem">
      <span 
       className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
       onClick={onComplete}
      >
        ✅
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={ondelete}
      >
        ❌
      </span>
    </li>
  );
}

export { TodoItem };