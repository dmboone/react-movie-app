import getBackdropMovies from "../backdropMovies";
import { useState, useEffect } from "react";
import "./backdrop.css";

const backdropMovies = getBackdropMovies();

const Backdrop = () => {
    const [currentBackdropMovieIndex, setCurrentBackdropMovieIndex] = useState(1);

    useEffect(() => {
        // Change backdrop image every 15 seconds
        const interval = setInterval(
            () => {
                setCurrentBackdropMovieIndex((currentBackdropMovieIndex + 1));
            }, 15000
        );

        // Clearing the interval
        return () => clearInterval(interval);
        
    }, [currentBackdropMovieIndex]);

    return(
        <>
            <div style={{overflow: "hidden", position: "relative", width: "100vw", height: "75%"}}>
                <h2 className="backdrop-text reveal-text">{backdropMovies[currentBackdropMovieIndex % backdropMovies.length].original_title}</h2>
                {/* Current Backdrop Image */}
                <img className="backdrop-wrapper current-backdrop-img fade-in-image" key={currentBackdropMovieIndex} src={`https://image.tmdb.org/t/p/original/${backdropMovies[currentBackdropMovieIndex % backdropMovies.length].backdrop_path}`} alt={backdropMovies[currentBackdropMovieIndex % backdropMovies.length].original_title} />
                {/* Old Backdrop Image */}
                <img className="backdrop-wrapper old-backdrop-img fade-out-image" key={currentBackdropMovieIndex-1} src={`https://image.tmdb.org/t/p/original/${backdropMovies[(currentBackdropMovieIndex - 1) % backdropMovies.length].backdrop_path}`} alt="" />
                <div className="overlay"></div>
            </div>
        </>
    );
}

export default Backdrop;