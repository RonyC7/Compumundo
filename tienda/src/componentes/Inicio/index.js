import React from 'react';
import Portada from "../../images/PantallaInicio.jpg";
import { Link } from "react-router-dom";


export const Inicio = () => {
  return (
    <div className="inicio">
      <Link to="/">
        <h1></h1>
        <div className="imagen-container">
          <img src={Portada} alt="inicio" className="imagen-portada" />
        </div>
      </Link> 
      <Link to="/productos">  
        <h1></h1>
      </Link>   
    </div>
  );
};

