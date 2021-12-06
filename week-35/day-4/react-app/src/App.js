import { Route, Routes } from 'react-router';
import './App.css';
import Products from './components/Products';



function App() {

 
  return (
    <div className="App">
        <h2>This is App </h2>
        
        <Routes>
          <Route path="/saman" element={<Products />}/>          
        </Routes>
        
        
    </div>
  );
}

export default App;
