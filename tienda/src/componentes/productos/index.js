import React from 'react';
import axios from 'axios'
import { useState, useEffect } from "react"

const URI = 'http://127.0.0.1:5000/'


export const ProductosLista = () => {
  const [productos, setProductos] = useState([])
  const lector = new FileReader();

  useEffect(() => {
      getProductos()
    },
    []
  )

  const getProductos = async () => {
    const res = await axios.get(URI + 'productos')
    setProductos(res.data)
  }

  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        <div className="producto">
          {
            productos.map(
              (reg) => (
                <div className="producto">
                  <a href="#">
                    <div className="producto__img">
                      <img src={`data:image/png;base64, ${reg.img}`} alt="" />
                    </div>
                  </a>
                  <div className="producto__footer">
                    <center>
                      <h1> {reg.title} </h1>
                      <p> {reg.category} </p>
                      <p className="price"> {reg.price} </p>
                      <label>Stock: </label>
                      <p> {reg.cantidad} </p>

                      <select>
                        {[...Array(reg.cantidad).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                    </center>
                  </div>
                  <div className="buttom">
                    <button className="btn">
                      Añadir al carrito
                    </button>
                    <div>
                    <a href="#" className="btn-vista">Acerca de</a>
                    </div>
                  </div>
                </div>
              )
            )
          }
        </div>
      </div>
    </>
  )
}