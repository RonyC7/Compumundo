import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa "Routes" en lugar de "Switch"
import { Header } from "./componentes/Header";
import { Inicio } from "./componentes/Inicio";
import { ProductosLista } from "./componentes/productos/index";
import 'boxicons';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes> {/* Utiliza "Routes" en lugar de "Switch" */}
          <Route path="/" element={<Inicio />} /> {/* Ruta de Inicio */}
          <Route path="/productos" element={<ProductosLista />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
