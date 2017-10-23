import React from 'react'

let AddTodo = ({adicionarItem}) => {
  let input

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        adicionarItem(input.value)
        input.value = ''
      }}>
        <div className="form-group">
          <label for="addInput">Adicionar item</label>
          <input ref={node => { input = node }} id="addInput" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </form>
    </div>
  )
}

export default AddTodo
