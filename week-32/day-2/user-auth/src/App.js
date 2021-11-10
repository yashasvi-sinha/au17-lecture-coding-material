import Login from "./components/Login";
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Restaurant from "./components/Restaurant";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/restaurants" element={<Restaurant />}/>
          <Route exact path="/about" element={<About/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
