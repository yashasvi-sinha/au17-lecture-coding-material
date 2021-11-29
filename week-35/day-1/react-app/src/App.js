import { useEffect, useState } from 'react';
import './App.css';
import Emoji from './Emoji';

function App() {
  
  const [number, setNumber] = useState(5)
  const [name, setName] = useState("ABC")


  
  useEffect(() => {
    console.log("Number Changed by Clicking Button")
  }, [number])

  useEffect(() => {
    console.log("Name Changed by Clicking Button")
  }, [name])

  const handleChange = () => {
    setNumber(number + 1)
  }

  const handleNameChange = () => {
    setName("XYZ")
  }

  return (
    <div className="App">
      {/* <Emoji /> */}



      <h1>Value is {number}</h1>
      <h1>Name is  {name}</h1>
      <button onClick={handleChange}>Change Value</button>
      <button onClick={handleNameChange}>Change Name</button>
    </div>
  );
}

export default App;
