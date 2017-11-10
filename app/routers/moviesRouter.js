const express = require('express');
const router = express.Router();
const MoviesModel = require('../models/moviesModel');
let moviesModel = new MoviesModel();


//\\ GET //\\

// réponse à l'url "/movies"
router.get('/', function(req, res) {

    movies = moviesModel.getMovies();
    return res.json(movies)
});

// réponse à l'url "/movies/:id"
router.get('/:id', function(req, res) {

    movie = moviesModel.getMovieDetails();
    // Ajouter les détails acteurs...
    return res.json(movie)
});


//\\ POST //\\

router.post('/', function (req, res) {

    movie = moviesModel.newMovie();
    // Ajouter les new genre/acteur etc...
    return res.json(movie)
});

module.exports = router;