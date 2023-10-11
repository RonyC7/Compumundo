import React, { useState, useEffect, createContext } from 'react';
import Data from '../images/Data'; // Asegúrate de que tengas tus datos aquí

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [productos, setProductos] = useState([]);
  const [menu, setMenu] = useState(false);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    // Carga tus productos desde los datos (Data.js en este caso)
    const producto = Data.items;
    if (producto) {
      setProductos(producto);
    } else {
      setProductos([]);
    }
  }, []);

  const addCarrito = (id) => {
    // Lógica para agregar productos al carrito
    const check = carrito.some((item) => item.id === id);
    if (check) {
      // Si el producto ya está en el carrito, no lo agregamos nuevamente.
      alert('El producto ya está en el carrito');
      return;
    }

    const productToAdd = productos.find((producto) => producto.id === id);
    if (productToAdd) {
      setCarrito([...carrito, productToAdd]);
      alert('El producto se ha agregado al carrito');
    }
  };

  const value = {
    productos,
    menu: [menu, setMenu],
    addCarrito,
    carrito: [carrito, setCarrito],
  };

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
