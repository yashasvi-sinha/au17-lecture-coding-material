import { Component } from 'react'

class Clock extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            currentDate: new Date(),
        }
    }


    componentDidMount(){
        this.timerId = setInterval(() => {
            console.log(`Updating Timer for timer Id ${this.timerId}`)
            this.setState({currentDate: new Date()})
        }, 1000);
    }

    componentWillUnmount(){
        console.log(`Clearing timer for timer Id ${this.timerId}`)
        clearInterval(this.timerId)
    }
    
    
    render() {
        return (
            <div>
                <h1>Clock</h1>
                <h2>{this.state.currentDate.toDateString()}  - {this.state.currentDate.toLocaleTimeString()} </h2>
            </div>
        )
    }
}


export default Clock