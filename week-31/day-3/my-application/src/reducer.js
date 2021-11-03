import { changeAgeAction, changeBackgroundAction, changeTextAction } from "./actions"

const initialState = {
    text: "Hello",
    age: 321,
    backgroundColor: "#FFFFFF"
}

//reducer will get global state from the redux store and a specific action
export const allReducer = (state = initialState, action) => {

    //how to handle a specific action
    if (action.type === changeTextAction.type) {

        return {
            ...state,
            text: "Hello World"
        }
    }

    if (action.type === changeAgeAction.type) {

        return {
            ...state,
            age: changeAgeAction.payload
        }
    }

    if (action.type === changeBackgroundAction.type) {
        return {
            ...state,
            backgroundColor: changeBackgroundAction.payload
        }
    }


    return state


}