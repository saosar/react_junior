import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState(''); /* searchValue es vacio, y el set se va a reemplaza por lo del usuario*/

  const onSearchValueChange = (event) => {  /* fn que permite que llame actualizar esgtado*/ 
    console.log(event.target.value); /*busca en consola donde esta el valor y pongo con punto*/
    setSearchValue(event.target.value);
  };

  return [
    <input 
      className="TodoSearch" 
      placeholder="Cebolla"
      value={searchValue} 
      onChange={onSearchValueChange}  /* cuando input cambie ejecuta funcion*/
    />,
    <p>{searchValue}</p>  /* borrar el valor en parrafo*/
  ];
}

export { TodoSearch };