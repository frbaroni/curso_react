import React, { Component } from 'react';

class OiMundo extends Component {
  static defaultProps = {
    nomeee: 'FATEC'
  }

  render() {
    return (
      <p>{this.props.nomeee}</p>
    );
  }
}

export default OiMundo;
