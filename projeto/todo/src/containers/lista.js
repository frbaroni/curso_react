import { connect } from 'react-redux'
import { trocarEstado } from '../actions'
import TodoList from '../components/TodoList'

const mostrarItens = (todos, filtro) => {
  switch (filtro) {
    case 'MOSTRAR_TODOS':
      return todos
    case 'MOSTRAR_FINALIZADOS':
      return todos.filter(t => t.finalizado)
    case 'MOSTRAR_PENDENTES':
      return todos.filter(t => !t.finalizado)
  }
}

const mapStateToProps = state => {
  return {
    todos: mostrarItens(state.todos, state.filtro)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(trocarEstado(id))
    }
  }
}

const ItensDaLista = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ItensDaLista
