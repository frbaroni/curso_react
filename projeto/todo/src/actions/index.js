let nextTodoId = 0
export const adicionar = texto => {
  return {
    type: 'ADICIONAR',
    id: nextTodoId++,
    texto
  }
}

export const trocarFiltro = filtro => {
  return {
    type: 'TROCAR_FILTRO',
    filtro
  }
}

export const trocarEstado = id => {
  return {
    type: 'TROCAR_ESTADO',
    id
  }
}
