import Login from "./components/Login";
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Restaurant from "./components/Restaurant";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/restaurants" element={<Restaurant />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
