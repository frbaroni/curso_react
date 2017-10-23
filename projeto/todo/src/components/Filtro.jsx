import React from 'react'
import PropTypes from 'prop-types'

const Filtro = ({ativo, children, trocarFiltro}) => {
  if (ativo) {
    return <button className="btn btn-success" style={{marginLeft: '10px'}}>{children}</button>
  }

  return (
    <button className="btn btn-default" style={{marginLeft: '10px'}} onClick={() => trocarFiltro()}>
      {children}
    </button>
  )
}

Filtro.propTypes = {
  ativo: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  trocarFiltro: PropTypes.func.isRequired
}

export default Filtro
