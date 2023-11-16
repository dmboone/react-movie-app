import './App.css';
import Backdrop from './components/backdrop';
import { BiMenuAltLeft } from "react-icons/bi";
import MovieSection from './components/movieSection';

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
      <section>
        <header className='sectionHeader'>Drama</header>
        <MovieSection genre='drama'></MovieSection>
      </section>
      <section>
        <header className='sectionHeader'>Romance</header>
        <MovieSection genre='romance'></MovieSection>
      </section>
      <section>
        <header className='sectionHeader'>Comedy</header>
        <MovieSection genre='comedy'></MovieSection>
      </section>
      <section>
        <header className='sectionHeader'>Horror</header>
        <MovieSection genre='horror'></MovieSection>
      </section>
    </>
  );
}

export default App;
