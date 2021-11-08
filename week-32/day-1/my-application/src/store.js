import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { allReducer } from './reducer'
import reduxLogger from 'redux-logger'
// specific pattern that must be followed



//this is global store 
//the second param is to connect redux dev tools in the browser with the application's redux store
// export const myStore = createStore(allReducer, {}, applyMiddleware(myMiddleware, betterMiddleware))


//we are combining all the enhancers and middleware and passing the composed value to Redux
// const composedStuff = compose(applyMiddleware(reduxLogger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const myStore = createStore(allReducer, composeEnhancers(applyMiddleware(reduxLogger, thunkMiddleware)))
