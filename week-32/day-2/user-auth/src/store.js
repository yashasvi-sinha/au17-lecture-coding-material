import { compose, createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducer'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))