import { useState, createContext } from 'react'
import './App.css';
import ChildA from './ChildA';

export const UserContext = createContext()

function App() {

  const [userName, setUserName] = useState("John Doe")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const obj = {
    userName, 
    isLoggedIn,
    setUserName
  }
  return (
    <UserContext.Provider value={ obj }>
      <div className="App">
        <h2>This is App </h2>
        <ChildA />
      </div>
    </UserContext.Provider>
  );
}

export default App;
