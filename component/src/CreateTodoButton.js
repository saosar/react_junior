import react from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = (msg) => {
      alert(msg);
    };
    
    return (
      <>
          {/* ✅ */}
          <button
            className="CreateTodoButton"
            onClick={() => onClickButton('Aquí se debería abrir el modal')}
          >
            +
          </button>
          {/* ❌ */}
          <button
            className="CreateTodoButton"
            onClick={onClickButton('Esta función se ejecuta al inicio, no al presionar el botón')}
          >
            +
          </button>
      </>
    );
}

export { CreateTodoButton };