import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAge } from './actions'

function Age() {

    const age = useSelector(state => state.age)
    
    const [inputAge, setInputAge] = useState(0)

    const dispatch = useDispatch()

    function handleClick() {

        const changeActionObj = changeAge(Number(inputAge))

        dispatch(changeActionObj)
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
