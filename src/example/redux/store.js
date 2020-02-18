import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import data from '../mockData'

const middleware = applyMiddleware(thunk);

const store = createStore(()=>data, {}, composeWithDevTools(middleware));

export default store;
