import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeBackground } from './actions'

function ChangeBackground() {
    const bgColor = useSelector(state => state.backgroundColor)


    const dispatch = useDispatch()

    function handleClick() {
        dispatch(changeBackground("#eaea33"))
    }

    return (
        <div style={ {backgroundColor: bgColor} }>
            <h2>Background Color is {bgColor}</h2>
            <button onClick={handleClick}>Change AGE</button>
        </div>
    )
}

export default ChangeBackground
