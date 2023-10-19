import './App.css';
import Backdrop from './components/backdrop';
import { BiMenuAltLeft } from "react-icons/bi";

function App() {
  return (
    <>
      <div className="wrapper">
        <header>
          <h1>React-Movie-App</h1>
          <BiMenuAltLeft
            color='white'
            size='2em'
          />
        </header>
      </div>
      <Backdrop></Backdrop>
    </>
  );
}

export default App;
