import axios from "axios"
export const GET_USERS_FROM_API = 'GET_USERS_FROM_API'

// export const getUsers = () => {
//     return {
//         type: GET_USERS_FROM_API,
//         payload: [{name: "ASD"}, { name: "ZXC"}]
//     }
// }

export const getUsers = () => {
    
    //return a function rather than an object
    return async (dispatch, getState) => {
        
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")

        const allUsers = response.data

        dispatch({
            type: GET_USERS_FROM_API,
            payload: allUsers
        })
    }
}

