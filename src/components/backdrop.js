import getBackdropMovies from "../backdropMovies";

const backdropMovies = getBackdropMovies();

console.log(backdropMovies);

const Backdrop = () => {
    return(
        <>
            <img src={`https://image.tmdb.org/t/p/original/${backdropMovies[0].backdrop_path}`} alt="" />
        </>
    );
}

export default Backdrop;