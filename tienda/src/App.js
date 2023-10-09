import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { Header } from "./componentes/Header";
import { Inicio } from "./componentes/Inicio";
import { ProductosLista } from "./componentes/productos/index";
import 'boxicons';
import { DataProvider } from "./context/Dataprovider";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Header />
        <Routes> 
          <Route path="/" element={<Inicio />} /> 
          <Route path="/productos" element={<ProductosLista />} />
        </Routes>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
