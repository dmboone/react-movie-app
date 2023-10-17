let backdropMovies = [];

// API Call to Grab List of Popular Movies
await fetch(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN}`
        }
    }
)
.then(response => response.json())
.then(response => {
    // Excludes Adult Content
    backdropMovies = response.results.filter(result => result.adult !== true);
    // Grabbing relevant information from response
    backdropMovies = backdropMovies.map(result => {
        return {
            id: result.id,
            backdrop_path: result.backdrop_path, 
            original_title: result.original_title,
            poster_path: result.poster_path,
        }
    });
})
.catch(err => console.error(`${err}\nCould not fetch backdropMovies.`));

// Getter
const getBackdropMovies = () => {
    return backdropMovies;
};

export default getBackdropMovies;