import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import data from '../mockData'

const middleware = applyMiddleware(thunk)

const store = createStore(
  () => ({ data, itemsPerPage: 5,pageButtons:10 }),
  {},
  composeWithDevTools(middleware)
)

export default store
