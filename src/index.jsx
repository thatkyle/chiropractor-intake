import { h, render, Component } from 'preact'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configure-store'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)