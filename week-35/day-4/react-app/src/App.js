import { Route, Routes } from 'react-router';
import './App.css';
import Cat from './Cat';
import ChildA from './ChildA';
import ChildB from './ChildB';
import Products from './Products';



function App() {

 
  return (
    <div className="App">
        <h2>This is App </h2>
        
        <Routes>
          <Route path="/childa/*"  element={<ChildA />} />

          <Route path="/saman" element={<Products />}/>

          <Route path="/categories">
            <Route path=":productCategory" element={<Cat />}></Route>
          </Route>
          
        </Routes>
        
        
    </div>
  );
}

export default App;
