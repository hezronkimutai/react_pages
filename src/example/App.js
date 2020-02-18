import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './assets/App.scss'
import Example from './example'
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Example />
      </Provider>
    )
  }
}

export default App
