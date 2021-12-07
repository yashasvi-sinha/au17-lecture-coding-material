import React, { useEffect, useState } from 'react'
import { useLocalStorage } from '../customHooks'

function BetterCounter() {

    const [counter, setCounter] = useLocalStorage('currentCounter', 0)

    return (
        <div>
            <h1>Better Counter, Value {counter}</h1>
            <button onClick={() => setCounter(Number(counter) + 1) }>Increment</button>
        </div>
    )
}

export default BetterCounter
