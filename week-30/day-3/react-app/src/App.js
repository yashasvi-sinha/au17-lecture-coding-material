import logo from './logo.svg';
import './App.css';
import Test from './Test';


function App() {
  return (
    <div className="App">
      <Test shopDummy={false}/>
      <Test shopDummy={false}/>
      <Test shopDummy={false}/>
      <Test shopDummy={false}/>
      <Test shopDummy={false}/>
      <Test shopDummy={true} />
      
    </div>
  );
}

export default App;
