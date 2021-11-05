import { changeAge, changeBackground,  changeText } from "./actions"

const initialState = {
    text: "Hello",
    age: 321,
    backgroundColor: "#FFFFFF"
}

//reducer will get global state from the redux store and a specific action
export const allReducer = (state = initialState, action) => {

    //how to handle a specific action
    if (action.type === changeText().type) {

        
        return {
            ...state,
            text: "Hello World"
        }
    }

    if (action.type === changeAge().type) {

        return {
            ...state,
            age: action.payload
        }
    }

    if (action.type === changeBackground().type) {
        return {
            ...state,
            backgroundColor: action.payload
        }
    }


    return state


}