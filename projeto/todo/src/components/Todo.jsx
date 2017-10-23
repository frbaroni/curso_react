import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, finalizado, texto }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: finalizado ? 'line-through' : 'none'
    }}
  >
    <p className={finalizado ? 'bg-success success-list-item' : 'bg-info info-list-item' } >
      {texto}
    </p>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  finalizado: PropTypes.bool.isRequired,
  texto: PropTypes.string.isRequired
}

export default Todo
