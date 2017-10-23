import { connect } from 'react-redux'
import { trocarFiltro } from '../actions'
import Filtro from '../components/Filtro'

const mapStateToProps = (state, ownProps) => ({
  ativo: ownProps.filtro === state.filtro
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  trocarFiltro: () => dispatch(trocarFiltro(ownProps.filtro))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filtro)
