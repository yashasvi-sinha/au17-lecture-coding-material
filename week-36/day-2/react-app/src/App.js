import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import { useDocumentTitle } from './customHooks';
import ShowHide from './components/ShowHide';
import BetterCounter from './components/BetterCounter';

function App() {

  useDocumentTitle("asdjasldkjasldk")

  return (
    <div className="App">

      {/* <Title />
      <ShowHide /> */}
      <ShowHide />
      <BetterCounter />
    </div>
  );
}

export default App;
