import { ADD_RESTAURANT, GET_ALL_RESTAURANT, USER_LOGIN, USER_LOGOUT } from "./actions"

const initialState = {
    user: {
        isLoggedIn: Boolean(localStorage.getItem('userLoggedIn')) || false,
        token: localStorage.getItem('userToken') || null
    },
    restaurant: []
}

export const rootReducer = (state = initialState, action) => {


    if (action.type === USER_LOGIN || action.type === USER_LOGOUT) {
        
        return {
            ...state,
            user: {
                isLoggedIn: action.payload.isLoggedIn,
                token: action.payload.token
            }
        }
    }

    // if (action.type === USER_LOGOUT) {
        
    //     return {
    //         ...state,
    //         user: {
    //             isLoggedIn: action.payload.isLoggedIn,
    //             token: action.payload.token
    //         }
    //     }
    // }


    if (action.type === GET_ALL_RESTAURANT) {
        
        return {
            ...state,
            restaurant: action.payload
        }
    }

    if (action.type === ADD_RESTAURANT) {
        
        const restaurantArr = [...state.restaurant, action.payload]
        return {
            ...state,
            restaurant: restaurantArr
        }
    }


    return state
}