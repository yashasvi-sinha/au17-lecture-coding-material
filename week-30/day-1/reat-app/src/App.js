import { Component } from 'react';
import './App.css';
import Clock from './Clock';
import Display from './Display';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showComponent: true
    }
  }

  // removeComponent = () => {

  //   this.setState({showComponent: false})

  // }
  
  // addComponent = () => {

  //   this.setState({showComponent: true})

  // }

  // render() {
    
  //   if (this.state.showComponent === true) {
  //     return (
  //       <div>
  //         <Display />
  //         <button onClick={this.removeComponent}>Delete Me</button>
  //       </div>
  //     )
  //   }
    
  //   return(
  //     <div>
  //       <h1>Removed Component</h1>
  //       <button onClick={this.addComponent}>Add Me</button>
  //     </div>
  //   );
  // }
  

  componentDidMount(){
    setTimeout(() => {
      this.setState({showComponent: false})
    }, 10000);
  }



  render(){


    if (this.state.showComponent === false) {
      return null
    }

    return (

      <div>
        <Clock />
      </div>

    )
  }

}

export default App;
