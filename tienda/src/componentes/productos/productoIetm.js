// ProductoItem.js
import React, { useContext } from 'react';
import { DataContext } from '../../context/Dataprovider';

const ProductoItem = ({ id, title, price, category, image }) => {
  const { addCarrito, carrito } = useContext(DataContext);

  // Comprobar si el producto ya está en el carrito
  const enCarrito = carrito.some(item => item.id === id);

  return (
    <div className="producto">
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">Q{price}</p>
      </div>
      <div className="button">
        {enCarrito ? (
          <button className="btn btn-disabled">Añadido al carrito</button>
        ) : (
          <button className="btn" onClick={() => addCarrito(id)}>
            Añadir al carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductoItem;
