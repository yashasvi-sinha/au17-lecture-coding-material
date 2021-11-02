import { createStore } from 'redux'
import allReducers from './reducers'

//creating a centralized store
const myAppStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default myAppStore
