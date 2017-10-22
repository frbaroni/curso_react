import React, { Component } from 'react';

class Estado extends Component {
  state = {
    cliques: 0
  }

  quandoClicamos = (evento) => {
    this.setState({
      cliques: this.state.cliques + 1
    })
  }

  render() {
    return (
      <div>
        <p>Fui clicado {this.state.cliques}</p>
        <button onClick={this.quandoClicamos}>Adicionar um clique</button>
      </div>
    )
  }
}

export default Estado;
