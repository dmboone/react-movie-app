import getMovies from "../getMovies";
import "./MovieSection.css";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";

let genreMap = {
    drama: '18',
    action: '28',
    romance: '10749',
    comedy: '35',
    documentary: '99',
    horror: '27'
}

const MovieSection = (props) => {

    const [movies, setMovies] = useState([]);
    const moviesRef = useRef(null);

    useEffect(() => {
        getMovies(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreMap[props.genre]}`)
        .then((response)=>{
            setMovies(response);
        });
    }, [props.genre]);

    const scrollLeft = () =>{
       moviesRef.current.scrollBy(-500, 0);
    };

    const scrollRight = () => {
       moviesRef.current.scrollBy(500, 0);
    };

    return(
        <div className="row">
            <div className="page-button left">
                <BiChevronLeft 
                    color='white'
                    size='4em'
                    onClick={() => scrollLeft()}
                />
            </div>
            <div className="movies" ref={moviesRef}>
                {movies.map((movie) => (
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" key={`${movie.id}`}/> 
                ))
                }
            </div>
            <div className="page-button right">
                <BiChevronRight 
                    color='white'
                    size='4em'
                    onClick={() => scrollRight()}
                />
            </div>
        </div>
    );
}

export default MovieSection;