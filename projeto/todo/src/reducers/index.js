import { combineReducers } from 'redux'
import todos from './todos'
import filtro from './filtro'

const todoApp = combineReducers({
  todos,
  filtro
})

export default todoApp
