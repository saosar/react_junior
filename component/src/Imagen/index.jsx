import React from 'react';
import './Imagen.css';
import Baile from './Baile.gif';

function Imagen(){
    return(
        <img id="Baile" alt="Baile" src={Baile}></img>
    );
};

export { Imagen };