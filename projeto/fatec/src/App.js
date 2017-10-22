import React, { Component } from 'react';

import OiMundo from './OiMundo.js';
import Beber from './Beber.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <OiMundo nomeee="Fernando" />

        <Beber />
        <Beber idade="13" />
        <Beber idade="18" />
        <Beber idade="23" />
        <Beber idade="32" />
        <Beber idade="abc"/>
      </div>
    );
  }
}

export default App;
