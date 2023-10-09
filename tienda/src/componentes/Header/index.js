import React from 'react';
import { Link } from 'react-router-dom'; 
import compumundo from "../../images/compumundo.jpg";

export const Header = () => {
  return (
    <header>
      <Link to="/"> {/* Agrega un enlace al logo */}
        <div className="logo">
          <img src={compumundo} alt="logo" width="275"/>
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link> 
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link> 
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item__total">0</span>
      </div>
    </header>
  )
}
