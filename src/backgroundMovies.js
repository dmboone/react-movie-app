<<<<<<< HEAD
let backgroundMovies = [];
=======
let backgroundMovies = [{

}];
>>>>>>> f17f167f0fefad260025adedf8d6f47481b21832

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
<<<<<<< HEAD
    .then(response => {
        console.log(response)

        backgroundMovies = response.results;

        console.log(backgroundMovies)
    })
=======
    .then(response => console.log(response))
>>>>>>> f17f167f0fefad260025adedf8d6f47481b21832
    .catch(err => console.error(`${err}\nCould not fetch backgroundMovies.`));
};

export default getBackgroundMovies;