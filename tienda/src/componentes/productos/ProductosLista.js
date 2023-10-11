import React from 'react';
import ProductoItem from './ProductoItem';

const ProductosLista = () => {
  const productos = [
    {
      id: 1,
      title: 'HP Victus',
      category: 'Laptop Gamer',
      price: 5000,
      image: require('../../images/LaptopVictus.jpg').default,
    },
    {
      id: 2,
      title: 'Lenovo',
      category: 'Laptop',
      price: 3500,
      image: require('../../images/Lenovo.jpg').default,
    },
    {
      id: 3,
      title: 'ASUS',
      category: 'Laptop',
      price: 3000,
      image: require('../../images/ASUS.jpg').default,
    },
    {
      id: 4,
      title: 'DELL',
      category: 'Laptop',
      price: 4500,
      image: require('../../images/DELLXPS.jpg').default,
    },
    {
      id: 5,
      title: 'HP Omen',
      category: 'Laptop',
      price: 6500,
      image: require('../../images/OMEN.jpg').default,
    },
    {
      id: 6,
      title: 'ACER',
      category: 'Laptop',
      price: 2800,
      image: require('../../images/ACER.jpg').default,
    },
    {
      id: 7,
      title: 'ASUS ZenBook',
      category: 'Laptop',
      price: 10000,
      image: require('../../images/ASUSZ.jpg').default,
    },
    {
      id: 8,
      title: 'Hp Envy',
      category: 'Laptop',
      price: 5500,
      image: require('../../images/ENVY.jpg').default,
    },
    {
      id: 9,
      title: 'Huawei MateBook',
      category: 'Laptop',
      price: 4300,
      image: require('../../images/HUAWEI.jpg').default,
    },
    {
      id: 10,
      title: 'GATEWAY',
      category: 'Laptop',
      price: 4000,
      image: require('../../images/GATEWAY.jpg').default,
    },
    {
      id: 11,
      title: 'Dell G7',
      category: 'Laptop Gamer',
      price: 8500,
      image: require('../../images/DELLG7.jpg').default,
    },
    {
      id: 12,
      title: 'Acer Nitro',
      category: 'Laptop Gamer',
      price: 6500,
      image: require('../../images/ACERN.jpg').default,
    },
    {
      id: 13,
      title: 'Surface',
      category: 'Laptop',
      price: 5500,
      image: require('../../images/SURFACE.jpg').default,
    },
    {
      id: 14,
      title: 'Dell',
      category: 'Laptop',
      price: 4300,
      image: require('../../images/DELL01.jpg').default,
    },
    {
      id: 15,
      title: 'Hp Spectre',
      category: 'Laptop',
      price: 7700,
      image: require('../../images/SPECTRE.jpg').default,
    },
    {
      id: 16,
      title: 'Lenovo Legion',
      category: 'Laptop Gamer',
      price: 6800,
      image: require('../../images/LENOVOL.jpg').default,
    },
    {
      id: 17,
      title: 'Lenovo Yoga',
      category: 'Laptop',
      price: 5000,
      image: require('../../images/LENOVOY.jpg').default,
    },
    {
      id: 18,
      title: 'Asus ROG',
      category: 'Laptop Gamer',
      price: 10500,
      image: require('../../images/ASUSROG.jpg').default,
    },
    {
      id: 19,
      title: 'Gigabyte Aorus',
      category: 'Laptop Gamer',
      price: 15500,
      image: require('../../images/AORUS.jpg').default,
    },
    {
      id: 20,
      title: 'MSI',
      category: 'Laptop Gamer',
      price: 11800,
      image: require('../../images/MSI.jpg').default,
    },
  ];

  return (
    <div>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        {productos.map(producto => (
          <ProductoItem
            key={producto.id}
            id={producto.id}
            title={producto.title}
            category={producto.category}
            price={producto.price}
            image={producto.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductosLista;
