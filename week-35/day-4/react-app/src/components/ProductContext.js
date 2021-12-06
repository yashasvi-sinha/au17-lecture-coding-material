import { createContext, useReducer } from 'react'

export const ProductContext = createContext()

export const initialState = {
    addedProducts: []
}

export function reducerFn(state, action) {
    console.log(`🚀 ~ reducerFn ~ state`, state)
    console.log(`🚀 ~ reducerFn ~ action`, action)

    switch(action.type){
        case "ADD_ITEM":
            return {...state, addedProducts: [...state.addedProducts, action.payload]}

        default: 
            return state
    }

}

const ProductContextComponent = (props) => {

    const [ state, productDispatch ] = useReducer(reducerFn, initialState)

  const providerState = {
    state,
    productDispatch
  }

  return (
    <ProductContext.Provider value={providerState} >
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextComponent