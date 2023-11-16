let movies = [];

const getMovies = async (endpoint) => {
    // API Call to Grab List of Popular Movies
    let response = await fetch(
        endpoint,
        {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN}`
            }
        }
    );

    response = await response.json();

    // Excludes Adult Content and Non-English Films
    movies = response.results.filter(result => result.adult !== true && result.original_language === "en");
    // Grabbing relevant information from response
    movies = movies.map(result => {
        return {
            id: result.id,
            backdrop_path: result.backdrop_path, 
            original_title: result.original_title,
            poster_path: result.poster_path,
        }
    });

    return movies;
};

export default getMovies;