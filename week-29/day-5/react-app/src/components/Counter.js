import { Component } from "react";
import './Counter.css'

//component style object
const counterStyles = {
    backgroundColor: "green"
}



//class component
class Counter extends Component {

    //passing props to super class Component
    constructor(props){
        super(props)
        //attach the method to the "this" of the component
        this.incrementValue = this.incrementValue.bind(this)
        this.decrementValue = this.decrementValue.bind(this)
    }

    incrementValue(){
        this.props.increment()
    }

    decrementValue(){
        console.log("Clicked dec")

        this.props.decrement()
    }

    render() {
        return (
            <div style={ { margin: 50 } }>
                <h1 style={counterStyles} className='Counter-text-red'>Counter value is: {this.props.count}</h1>
                <button onClick={this.incrementValue}>Increment</button>
                <button onClick={this.decrementValue}>Decrement</button>
            </div>
        )
    }

}

export default Counter