import { USER_LOGIN } from "./actions"

const initialState = {
    user: {
        isLoggedIn: false,
        token: null
    }
}

export const rootReducer = (state = initialState, action) => {


    if (action.type === USER_LOGIN) {
        
        return {
            ...state,
            user: {
                isLoggedIn: action.payload.isLoggedIn,
                token: action.payload.token
            }
        }
    }


    return state
}