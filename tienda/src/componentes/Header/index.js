// Header.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import compumundo from "../../images/compumundo.jpg";
import { DataContext } from '../../context/Dataprovider';

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito

  const toogleMenu = () => {
    setMenu(!menu);
  }

  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={compumundo} alt="logo" width="275" />
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
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total">{carrito.length}</span>
      </div>
    </header>
  );
};
