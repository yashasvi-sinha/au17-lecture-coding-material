import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ClockF from './ClockF';
import { useEffect, useState } from "react";

function App() {

  const [showClock, setShowClock] = useState(true)


  useEffect( async () => {
    setTimeout(() => {
      setShowClock(false)
    }, 10000)
  }, [])


  return (
    <div className="App">
      <Counter />
      {showClock && <ClockF />}
    </div>
  );
}

export default App;
