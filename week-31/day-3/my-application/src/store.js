import {createStore} from 'redux'
import { allReducer } from './reducer'


//this is global store 
//the second param is to connect redux dev tools in the browser with the application's redux store
export const myStore = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
