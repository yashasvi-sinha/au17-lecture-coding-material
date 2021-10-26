import { useEffect, useState } from "react";

function ClockF() {

    const [currentDate, setCurrentDate] = useState(new Date())
    const [timerId, setTimerId] = useState(null)



    // //componentDidMount in functional component
    // useEffect(() => {
    //     console.log("Behaving as componentDidMount")
        
        
    //     const intervalTimerId = setInterval(() => {
    //         console.log("Updated Time")
    //         console.log("Timer", timerId)
            
    //         setCurrentDate(new Date())
    //     }, 1000);

    //     console.log(`Timer Id is ${intervalTimerId}`)
    //     setTimerId(intervalTimerId)
    // }, [])

    //componentDidUpdate
    useEffect( () => {
        console.log("Behaving as componentDidUpdate")
    })


    // //componentWillUnmount
    // useEffect( () => {
    //     return function (){
    //         console.log("Behaving as componentWillUnmount")
    //         clearInterval(timerId)
    //     }

    // }, [])


    //ALL the above in one
    useEffect( () => {
        console.log("Behaving as componentDidMount")
        const intervalTimerId = setInterval(() => {
            console.log("Updated Time")
            setCurrentDate(new Date())
        }, 1000);
        console.log(`Timer Id is ${intervalTimerId}`)


        return () => {
            console.log("Behaving as componentWillUnmount")
            clearInterval(intervalTimerId)
        }
    } , [])

    return (
        <div>
            <h1>Clock</h1>
            <h2>{currentDate.toDateString()} - {currentDate.toLocaleTimeString()} </h2>
        </div>
    )
}

export default ClockF
