import logo from './logo.svg';
import './App.css';
import ButtonLogger from './components/ButtonLogger';
import { useState } from 'react';
import DomExample from './components/DomExample';
import Factorial from './components/Factorial';

function App() {
  const [showButtonComponent, setShowButtonComponent] = useState(true)


  return (
    <div className="App">
      {/* { showButtonComponent === true ? <ButtonLogger /> : <h2>Hidden</h2> }
      

      <button onClick={ () => setShowButtonComponent(!showButtonComponent)}>Flip</button> */}


      {/* <DomExample /> */}

      <Factorial />
    </div>
  );
}

export default App;
