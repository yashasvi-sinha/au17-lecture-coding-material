import { Component } from "react";

//class component
class Counter extends Component {

    //passing props to super class Component
    constructor(props){
        super(props)

        //initializing the state of the component
        // this.state = {
        //     counter: 10
        // }

        //attach the method to the "this" of the component
        this.incrementValue = this.incrementValue.bind(this)
        this.decrementValue = this.decrementValue.bind(this)
    }

    incrementValue(){
        this.props.increment()
        
        
        // console.log("Value of this", this)

        //updating state using setState by creating a new object/state
        // this.setState({ counter: this.state.counter + 1})

        //updating state using setState by referencing whatever the previous state contained
        // this.setState( (prevState) => {

        //     return {
        //         counter: prevState.counter + 1
        //     }

        // })
    }

    decrementValue(){
        console.log("Clicked dec")

        this.props.decrement()

        //updating state using setState by creating a new object/state
        // this.setState({ counter: this.state.counter + 1})

        // //updating state using setState by referencing whatever the previous state contained
        // this.setState( (prevState) => {

        //     return {
        //         counter: prevState.counter -1
        //     }

        // })
    }

    render() {
        return (
            <div>
                <h1>Counter value is: {this.props.count}</h1>
                <button onClick={this.incrementValue}>Increment</button>
                <button onClick={this.decrementValue}>Decrement</button>
            </div>
        )
    }

}

export default Counter