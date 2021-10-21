import logo from './logo.svg';
import Counter from './components/Counter';
import { Component } from "react";


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 10
    }

    this.decrementCounter = this.decrementCounter.bind(this)
    this.incrementCounter = this.incrementCounter.bind(this)

  }


  incrementCounter() {


    //updating state using setState by referencing whatever the previous state contained
    this.setState((prevState) => {

      return {
        counter: prevState.counter + 1
      }

    })
  }


  decrementCounter() {


    //updating state using setState by referencing whatever the previous state contained
    this.setState((prevState) => {

      return {
        counter: prevState.counter - 1
      }

    })
  }

  render() {
    return (
      <div>
        <someImg />
        <Counter count={this.state.counter} decrement={this.decrementCounter} increment={this.incrementCounter} />
        <Counter count={this.state.counter} decrement={this.decrementCounter} increment={this.incrementCounter} />
        <Counter count={this.state.counter} decrement={this.decrementCounter} increment={this.incrementCounter} />
        <Counter count={this.state.counter} decrement={this.decrementCounter} increment={this.incrementCounter} />
        <Counter count={this.state.counter} decrement={this.decrementCounter} increment={this.incrementCounter} />
        <Counter count={this.state.counter} decrement={this.decrementCounter} increment={this.incrementCounter} />
        <Counter count={this.state.counter} decrement={this.decrementCounter} increment={this.incrementCounter} />
        <Counter count={this.state.counter} decrement={this.decrementCounter} increment={this.incrementCounter} />
      </div>
    );
  }
}

export default App;
