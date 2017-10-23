import AddTodo from '../components/AddTodo'
import { connect } from 'react-redux'
import { adicionar } from '../actions'

const mapDispatchToProps = dispatch => ({
  adicionarItem: id => dispatch(adicionar(id))
})

// com return explícito
// const mapDispatchToProps = dispatch => {
//   return {
//     adicionarItem: id => dispatch(adicionar(id))
//   }
// }

export default connect(null, mapDispatchToProps)(AddTodo)
