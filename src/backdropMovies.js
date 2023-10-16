let backdropMovies = [];

const getBackdropMovies = async ()=>{
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
        console.log(response)

        // Excludes Adult Content
        backdropMovies = response.results.filter(result => result.adult !== true);

        backdropMovies = backdropMovies.map(result => {
            return {
                id: result.id,
                backdrop_path: result.backdrop_path, 
                original_title: result.original_title,
                poster_path: result.poster_path,
            }
        });

        console.log(backdropMovies)
    })
    .catch(err => console.error(`${err}\nCould not fetch backdropMovies.`));

    return backdropMovies;
};

export default getBackdropMovies;