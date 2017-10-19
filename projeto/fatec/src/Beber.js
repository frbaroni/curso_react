
import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Beber extends Component {
  static propTypes = {
    idade: PropTypes.number
  }

  render() {
    const { idade } = this.props;
    if(idade >= 21) {
      return <p>#BoraProBar #Itaipava #EhNois{idade}</p>
    } else {
      return <p>Só {idade} anos? Vai estudar, muleque!</p>
    }
  }
}

export default Beber;
