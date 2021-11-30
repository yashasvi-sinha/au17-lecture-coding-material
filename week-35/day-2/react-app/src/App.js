import { PercentageStat } from "./PercentageStat";
import './App.css'

//<PercentageStat  numerator={2} denominator={0}  label="Profit"/>

function CustomButton(props) {
  return (
    <button className='btn'>
      {props.children}
    </button>
  )
}

function App() {

  return (
    <div className="App">

      <CustomButton >
        <h3>Pay Now</h3>
      </CustomButton>
      
      <CustomButton >
        <span>+</span>
        <h3>Pay Never</h3>
        <span>+</span>

      </CustomButton>
      
      <CustomButton >
        <h3>Pay Maybe</h3>
      </CustomButton>

      <CustomButton >
        <h3>Pay What</h3>
        <PercentageStat  numerator={2} denominator={0}  label="Profit"/>
      </CustomButton>

    </div>
  );
}


export default App;
