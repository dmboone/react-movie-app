import './App.css';
import Backdrop from './components/backdrop';
import { BiMenuAltRight } from "react-icons/bi";
import MovieSection from './components/movieSection';

function App() {
  return (
    <>
      <div className="wrapper">
        <header>
          <h1>React-Movie-App</h1>
          <BiMenuAltRight
            color='white'
            size='2em'
          />
        </header>
      </div>
      <Backdrop></Backdrop>
      <section>
        <h3 className='sectionHeader'>Drama</h3>
        <MovieSection genre='drama'></MovieSection>
      </section>
      <section>
        <h3 className='sectionHeader'>Romance</h3>
        <MovieSection genre='romance'></MovieSection>
      </section>
      <section>
        <h3 className='sectionHeader'>Comedy</h3>
        <MovieSection genre='comedy'></MovieSection>
      </section>
      <section>
        <h3 className='sectionHeader'>Horror</h3>
        <MovieSection genre='horror'></MovieSection>
      </section>
    </>
  );
}

export default App;
