const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADICIONAR':
      return [
        ...state,
        {
          id: action.id,
          texto: action.texto,
          finalizado: false
        }
      ]
    case 'TROCAR_ESTADO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, finalizado: !todo.finalizado}
          : todo
      )
    default:
      return state
  }
}

export default todos
