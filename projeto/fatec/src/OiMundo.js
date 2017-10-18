import React, { Component } from 'react';

class OiMundo extends Component {
  static defaultProps = {
    nomeee: 'FATEC'
  }

  render() {
    return (
      <span>{this.props.nomeee}</span>
    );
  }
}

export default OiMundo;
