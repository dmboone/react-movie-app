import getBackdropMovies from "../backdropMovies";
import { useState, useEffect } from "react";
import "./backdrop.css";

const backdropMovies = getBackdropMovies();

const Backdrop = () => {
    const [currentBackdropMovieIndex, setCurrentBackdropMovieIndex] = useState(0);
    const [oldBackdropMovieIndex, setOldBackdropMovieIndex] = useState(backdropMovies.length - 1);

    useEffect(() => {
        // Change backdrop image every 15 seconds
        const interval = setInterval(
            () => {
                setCurrentBackdropMovieIndex((currentBackdropMovieIndex + 1) % backdropMovies.length);
                setOldBackdropMovieIndex((oldBackdropMovieIndex + 1) % backdropMovies.length);
            }, 15000
        );

        // Clearing the interval
        return () => clearInterval(interval);
        
    }, [currentBackdropMovieIndex, oldBackdropMovieIndex]);

    return(
        <>
            <div className="backdrop-wrapper">
                <h2 className="backdrop-text reveal-text">{backdropMovies[currentBackdropMovieIndex].original_title}</h2>
            </div>
            {/* Current Backdrop Image */}
            <div className="backdrop-wrapper">
                <img className="current-backdrop-img fade-in-image" src={`https://image.tmdb.org/t/p/original/${backdropMovies[currentBackdropMovieIndex].backdrop_path}`} alt={backdropMovies[currentBackdropMovieIndex].original_title} />
            </div>
            {/* Old Backdrop Image */}
            <div className="backdrop-wrapper">
                <img className="old-backdrop-img fade-out-image" src={`https://image.tmdb.org/t/p/original/${backdropMovies[oldBackdropMovieIndex].backdrop_path}`} alt="" />
            </div>
            <div className="overlay"></div>

        </>
    );
}

export default Backdrop;