const filtro = (state = 'MOSTRAR_TODOS', action) => {
  switch (action.type) {
    case 'TROCAR_FILTRO':
      return action.filtro
    default:
      return state
  }
}

export default filtro
