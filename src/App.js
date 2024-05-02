import "./App.css";
import Backdrop from "./components/Backdrop";
import MovieSection from "./components/MovieSection";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header></Header>
      </div>
      <Backdrop></Backdrop>
      {/* need to turn this into a map instead of static */}
      <section>
        <h3 className="sectionHeader">Drama</h3>
        <MovieSection genre="drama"></MovieSection>
      </section>
      <section>
        <h3 className="sectionHeader">Romance</h3>
        <MovieSection genre="romance"></MovieSection>
      </section>
      <section>
        <h3 className="sectionHeader">Comedy</h3>
        <MovieSection genre="comedy"></MovieSection>
      </section>
      <section>
        <h3 className="sectionHeader">Horror</h3>
        <MovieSection genre="horror"></MovieSection>
      </section>
    </>
  );
}

export default App;
