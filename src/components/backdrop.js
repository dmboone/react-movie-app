import getBackdropMovies from "../backdropMovies";
import { useState, useEffect } from "react";
import "./backdrop.css";

const backdropMovies = getBackdropMovies();

const Backdrop = () => {
    const [backdropMovieIndex, setBackdropMovieIndex] = useState(0);

    useEffect(() => {
        // Change backdrop image every 8 seconds
        const interval = setInterval(
            () => setBackdropMovieIndex((backdropMovieIndex + 1) % backdropMovies.length),
            8000
        );

        // Clearing the interval
        return () => clearInterval(interval);
        
    }, [backdropMovieIndex]);

    return(
        <>
            <h2 className="backdrop-text">{backdropMovies[backdropMovieIndex].original_title}</h2>
            <div className="overlay"></div>
            <div className="backdrop-wrapper">
                <img className="backdrop-image" src={`https://image.tmdb.org/t/p/original/${backdropMovies[backdropMovieIndex].backdrop_path}`} alt={backdropMovies[backdropMovieIndex].original_title} />
            </div>
        </>
    );
}

export default Backdrop;