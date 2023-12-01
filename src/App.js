import React from "react";
import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import logo from "./imagenes/logo.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.state = { numClic: 0 };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic() {
    this.setState(({ numClic }) => ({ numClic: numClic + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClic: 0 });
  }

  render() {
    return (
      <div className="App">
        <div className="logo-contenedor">
          <img className="imagen-logo" src={logo} alt="Logo de Imagen" />
        </div>
        <div className="contenedor-principal">
          <Contador numClic={this.state.numClic} />
          <Boton
            texto="Clic"
            esBotonClic={true}
            manejarClic={this.manejarClic}
          />
          <Boton
            texto="Reiniciar"
            esBotonClic={false}
            manejarClic={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}

export default App;