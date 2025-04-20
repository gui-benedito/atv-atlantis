import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes/routes';
import mockClientes from './data/clientes.json'

function App() {

  useEffect(() => {
    const verificaClientes = localStorage.getItem('clientes') !== null
    if (!verificaClientes) {
      localStorage.setItem('clientes', JSON.stringify(mockClientes))
    }
  }, []);
  
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
