import React, { useMemo, useState } from 'react'

function Factorial() {

    const [num, setNum] = useState(1)

    const factorialResult = useMemo( () => {
        
        return calculateFactorial(num)

    }, [num] )

    // const factorialResult = calculateFactorial(num)

    const handleChange = (e) => {

        setNum(Number(e.target.value))

    }
    console.log("Factorial Component Rendered")
    
    return (
        <div>
            <input type="number"  value={num} onChange={handleChange} />
            <h1>Factorial of {num} is {factorialResult} </h1>
        </div>
    )
}


function calculateFactorial(number){

    console.log("calculateFactorial function called")
    const result = number <= 0 ? 1 : number * calculateFactorial(number - 1)

    return result
}

export default Factorial
