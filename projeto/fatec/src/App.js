import React, { Component } from 'react';

import OiMundo from './OiMundo.js';
import Beber from './Beber.js';
import Estado from './Estado.js';
import Eventos from './Eventos.js';

import './App.css';

function PrimeiroComponente(props) {
  return <span>Olá {props.nome}</span>
}

class App extends Component {
  render() {
    return (
      <div>
        <PrimeiroComponente nome="Fernando" />

        <OiMundo nomeee="Fernando" />
        <OiMundo />

        <Beber />
        <Beber idade="13" />
        <Beber idade="18" />
        <Beber idade="23" />
        <Beber idade="32" />
        <Beber idade="abc"/>

        <Estado />


        <Eventos />
      </div>
    );
  }
}

export default App;
