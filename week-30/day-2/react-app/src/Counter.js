import { useState } from 'react'

function Counter(props) {
    
    // useState hook returns an array, which contains the state value and a function to update the stored state value
    const [counterValue, setCounterValue] = useState(10) //use state takes in single parameter ==> initial value of a state
    //using destructuring to get reference to state value and state updater function


    const [noOfTimesClicked, setNoOfTimesClicked] = useState(0)

    function handleIncrement(){
        console.log("Clicked Button")
        const newCounterValue = counterValue + 1
        setCounterValue( newCounterValue )
        setNoOfTimesClicked(noOfTimesClicked + 1)
    }


    function handleDecrement(){
        const newCounterValue = counterValue - 1
        setCounterValue( newCounterValue  )
        setNoOfTimesClicked(noOfTimesClicked + 1)
    }

    return (
        <div>
            <h1>Counter is {counterValue}</h1>
            <h2>No of times clicked: {noOfTimesClicked}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter