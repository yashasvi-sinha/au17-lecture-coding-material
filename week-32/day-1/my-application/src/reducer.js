import { GET_USERS_FROM_API } from "./actions"

const initialState = {
    users: []
}

//reducer will get global state from the redux store and a specific action
export const allReducer = (state = initialState, action) => {

    if (action.type === GET_USERS_FROM_API) {
        
        return {
            ...state,
            users: action.payload
        }

    }

    return state


}