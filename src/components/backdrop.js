import getBackdropMovies from "../backdropMovies";
import { useState, useEffect } from "react";

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
            <img width='100%' src={`https://image.tmdb.org/t/p/original/${backdropMovies[backdropMovieIndex].backdrop_path}`} alt="" />
        </>
    );
}

export default Backdrop;