import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeText } from './actions'


function Hello() {

    //use selector allows you to select specific properties from the global state
    const displayText = useSelector( (state) => {return state.text} )
    
    const dispatcher = useDispatch()
    
    function handleClick() {

        dispatcher(changeText())

    }

    return (
        <div>
            <h1>{displayText}</h1>
            <button onClick={handleClick}>Change Text</button>
        </div>
    )
}

export default Hello
