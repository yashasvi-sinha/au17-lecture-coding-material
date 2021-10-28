import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Book from './components/Book';
import Car from './components/Car';
import Electronic from './components/Electronic';
import MainLayout from './layouts/MainLayout';

function App() {

  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );


  // <BrowserRouter>

  //       <Route exact path="/books" >
  //         <Book />
  //       </Route>

  //       <Route exact path="/cars">
  //         <Car />
  //       </Route>

  //       <Route exact path="/electronics">
  //         <Electronic />
  //       </Route>

  //     </BrowserRouter>
}

export default App;
