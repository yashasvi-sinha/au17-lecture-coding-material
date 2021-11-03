import {useSelector, useDispatch} from 'react-redux'
import { incrementAction, decrementAction } from './actions'

function App() {

  const counterValue = useSelector( (state) => state.modifyCounter )
  const dispatch  = useDispatch()
  return (
    <div className="App">
      
      <h2>Counter Value is {counterValue}</h2>
      <button onClick={ () => { dispatch(incrementAction)  }}>+</button>
      <button onClick={ () => { dispatch(decrementAction)  }} >-</button>
    </div>
  );
}

export default App;
