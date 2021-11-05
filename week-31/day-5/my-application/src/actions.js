
export const changeText = () => {
    return {
        type: "USER_CLICKED_CHANGE_TEXT_BUTTON",
        payload: 0
    }
}

//Action Creator
export const changeAge = (age) => {
    return { type: "MAKE AGE DIFFERENT", payload: age}
}


export const changeBackground = (backGroundColor = "#fff") => {
    return {
        type: 'CHANGE_BACKGROUND_COLOR',
        payload: backGroundColor
    }
}