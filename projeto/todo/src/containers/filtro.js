import { connect } from 'react-redux'
import { trocarFiltro } from '../actions'
import Filtro from '../components/Filtro'

const mapStateToProps = (state, ownProps) => {
  return {
    ativo: ownProps.filtro === state.filtro
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    trocarFiltro: () => {
      dispatch(trocarFiltro(ownProps.filtro))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtro)
