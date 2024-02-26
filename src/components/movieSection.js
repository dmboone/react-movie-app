import getMovies from "../getMovies";
import "./movieSection.css";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { useState, useEffect } from "react";

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

    useEffect(() => {
        getMovies(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreMap[props.genre]}`)
        .then((response)=>{
            setMovies(response);
        });
    }, [props.genre]);

    return(
        <>
            <div className="row">
                <div className="page-button left">
                    <BiChevronLeft 
                        color='white'
                        size='4em'/>
                </div>
                {movies.map((movie) => (
                    <img className="movie-posters" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" key={`${movie.id}`}/> 
                ))
                }
                <div className="page-button right">
                    <BiChevronRight 
                        color='white'
                        size='4em'/>
                </div>
            </div>
        </>
    );
}

export default MovieSection;