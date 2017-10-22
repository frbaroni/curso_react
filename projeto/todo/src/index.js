import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker'
import todoApp from './reducers'
import App from './components/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
