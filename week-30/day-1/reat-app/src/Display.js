import { Component } from "react";


class Display extends Component{


    constructor(props){
        super(props)
        this.state = {
            counter: 1
        }
        console.log("Called Component Constructor")
    }


    componentDidMount(){
        console.log("Called Component Did Mount")
    }

    componentDidUpdate(){
        console.log("Called Component Did Update")
    }

    componentWillUnmount(){
        console.log("Called Component Will Unmount")
    }


    updateCount = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }


    render(){
        console.log("Called Render")
        return (
            <div>
                <h1>This is a display {this.state.counter}</h1>
                <button onClick={this.updateCount}>Click Me</button>
            </div>
        )
    }

}

export default Display