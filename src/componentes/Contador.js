import React from 'react';
import '../estilos/Contador.css'

class Contador extends React.Component {
  render() {
    return (
    <div className='contador'>
        { this.props.numClic }
    </div>
  );
  }
}

export default Contador;