// A reducer is a function which takes in an initial/updated state and an action
// Then it returns the new updated state based on the action taken

const initialState = 550

const modifyCounter = (counterState = initialState, action) => {

    switch (action.type){
        case "INCREMENT" :
            return counterState + 1

        case "DECREMENT" :
            return counterState - 1

        default:
            return counterState
    }

}

export default modifyCounter