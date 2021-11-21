let movies = require("./movies.json");

module.exports = (app) => {
    const getAllMovies = (req, res) => res.json(movies);
    const deleteMovie = (req, res) => {
        const id = req.params['mid'];
        movies = movies.filter(m => m._id !== id);
        res.json(movies);
    };
    const createMovie = (req, res) => {
        const newMovie = req.body;
        newMovie._id = new Date().getTime().toString();
        movies = [...movies, newMovie];
        res.json(movies);
    }
    const saveMovie = (req, res) => {
        const newMovie = req.body;
        const movieId = req.params['mid'];
        movies = movies.map(movie =>
            movie._id === movieId ? newMovie : movie);
        res.json(movies);
    }
    app.put('/api/movies/:mid', saveMovie);
    app.post('/api/movies', createMovie);
    app.delete('/api/movies/:mid', deleteMovie);
    app.get('/api/movies', getAllMovies);
};