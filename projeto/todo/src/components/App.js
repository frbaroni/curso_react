import React from 'react'
import Footer from './Footer'
import Todo from '../containers/add-todo'
import Lista from '../containers/lista'

const App = () => (
  <div className="container">
    <Todo />
    <Lista />
    <Footer />
  </div>
)

export default App
