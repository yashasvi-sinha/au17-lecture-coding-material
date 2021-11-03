import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAgeAction } from './actions'

function Age() {

    const age = useSelector(state => state.age)
    
    const [inputAge, setInputAge] = useState(0)

    const dispatch = useDispatch()

    function handleClick() {

        changeAgeAction.payload = Number(inputAge)

        dispatch(changeAgeAction)
    }

    return (
        <div>
            <h2>Age is {age}</h2>
            <input type="number" value={inputAge} onChange={(e) => setInputAge(e.target.value)}/>
            <button onClick={handleClick}>Change AGE</button>
        </div>
    )
}

export default Age
