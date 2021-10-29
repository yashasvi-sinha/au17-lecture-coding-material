import { BrowserRouter, Route } from "react-router-dom";
import Login from './pages/Login';
import AllRestaurants from './pages/AllRestaurants';

function App() {
  return (
    <div className="container">
      <BrowserRouter>

        <Route exact path='/login' component={Login} />
        <Route exact path='/all-restaurants' component={AllRestaurants} />

      </BrowserRouter>
    </div>
  );
}

export default App;
