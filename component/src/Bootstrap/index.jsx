// #1 PARA BOOTSTRAP SOLITO
// import React from "react"  //Para escribir React.Fragment
// export default function Bootstrap(){
//     return (
//         <React.Fragment>
//             <button type="button" class="btn btn-primary">Primary</button>
//             <button type="button" class="btn btn-secondary">Secondary</button>

//         </React.Fragment>
//     )
// }
// export { Bootstrap }



// #2 PARA REACT-BOOTSTRAP
// import Button from 'react-bootstrap/Button';
// function Bootstrap(){
//     return (
//         <>
//             <Button variant="primary">Primary</Button>{' '}
//             <Button variant="secondary">Secondary</Button>{' '}
//         </>
//     );
// }
// export { Bootstrap }



// #3 PARA REACT-BOOTSTRAP ()


import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { TodoContext } from '../TodoContext'
import './Bootstrap.css';
// import { Imagen } from '../Imagen'

function Bootstrap() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    var num1 = completedTodos;
    var num2 = totalTodos;
    var percentage = Math.round(num1/num2*100);

    if (isNaN(percentage)) {
        percentage = 100;
        return (
            <div>
                <h1> No tienes tareas, puedes ir de sople en paz </h1>
                {/* <img src={Imagen[0].img}/> */}
            </div>
        );
    } else {
        percentage = Math.round(num1/num2*100);
    }
    
    return (
        <div>
            <ProgressBar striped variant="info" now={percentage} label={`${percentage}%`} />
        </div>
    );
}

export { Bootstrap }



// import Baile from './Baile.gif';
// function Imagen ()=> {
//     export default [
//         {"img":Baile,
//         "title": "El baile"
//         }
//     ];
// };
// export { Imagen };