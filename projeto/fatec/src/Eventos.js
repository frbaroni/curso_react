import React, { Component } from 'react';

class Eventos extends Component {
  state = {
    em_cima: false
  }

  quandoMouseEntrar = (evento) => {
    this.setState({ em_cima: true })
  }

  quandoMouseSair = (evento) => {
    this.setState({ em_cima: false })
  }

  render() {
    const quadradoEstilo = {
      backgroundColor: (this.state.em_cima ? 'green' : 'red'),
      width: '40px',
      height: '40px',
    }
    return (
      <div>
        <p>O mouse está {this.state.em_cima ? 'em cima do quadrado' : 'fora do quadrado'}</p>
        <div style={quadradoEstilo}
          onMouseOver={this.quandoMouseEntrar}
          onMouseOut={this.quandoMouseSair} ></div>
      </div>
    )
  }
}

export default Eventos;
