import React, { useRef, useState } from 'react'

function ButtonLogger() {

    // const [clickCount, setClickCount] = useState(0)

    //useRef Approach
    const logRef = useRef(0) //first time when component is mounted

    const handleClick = () => {

        // setClickCount(clickCount + 1)
        // console.log(`🚀 ~ handleClick ~ clickCount`, clickCount)
        
        logRef.current = logRef.current + 1

        console.log(`🚀 ~ handleClick ~ logRef.current`, logRef.current)
    }



    console.log("ButtonLogger Component Rendered")
    return (
        <div>
            <h1>Logs a button click</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default ButtonLogger
