import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logo from'./imagenes/logo.jpg';
import { useState } from 'react';

function App() {

  const [numClic, setNumClic] = useState(0);

  const manejarClic = () => {
    setNumClic(numClic + 1);
  }

  const reiniciarContador = () => {
    setNumClic(0);
  }

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="imagen-logo" src={logo} alt="Logo de Imagen" />
      </div>
      <div className="contenedor-principal">
        <Contador 
          numClic={ numClic }        />
        <Boton 
          texto="Clic" 
          esBotonClic={ true } 
          manejarClic={ manejarClic } 
        />
        <Boton
          texto="Reiniciar"
          esBotonClic={ false }
          manejarClic={ reiniciarContador }
        />
      </div>
    </div>
  );
}

export default App;
