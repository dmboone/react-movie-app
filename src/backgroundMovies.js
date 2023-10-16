let backgroundMovies = [{

}];

const getBackgroundMovies = async ()=>{
    const response = await fetch(
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
    .then(response => console.log(response))
    .catch(err => console.error(`${err}\nCould not fetch backgroundMovies.`));
};

export default getBackgroundMovies;