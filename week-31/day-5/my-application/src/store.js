import {createStore, applyMiddleware} from 'redux'
import { allReducer } from './reducer'
import reduxLogger from 'redux-logger'
// specific pattern that must be followed

//should return a function
function myMiddleware(store) {
    //store == Redux store
    
    // should return a function
    return function(next) {
        
        //this function should have the actual middleware logic that you want to perform
        return function (action) {
            console.log(`🚀 ~ myMiddleware ~ store`, store)
            console.log(`🚀 ~ myMiddleware ~ current state`, store.getState())
            console.log("TEST")
            next(action)
        }
    }
}

const betterMiddleware = (store) => (next) => (action) => {
    console.log(`🚀 ~ action`, action)
    next(action)
}

//this is global store 
//the second param is to connect redux dev tools in the browser with the application's redux store
// export const myStore = createStore(allReducer, {}, applyMiddleware(myMiddleware, betterMiddleware))
export const myStore = createStore(allReducer, applyMiddleware(reduxLogger))
