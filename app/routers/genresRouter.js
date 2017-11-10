const express = require('express');
const router = express.Router();
const GenresModel = require('../models/genresModel');
const MoviesModel = require('../models/moviesModel');
let genresModel = new GenresModel();
let moviesModel = new MoviesModel();

//\\ GET //\\

// réponse à l'url "/genres"
router.get('/', function(req, res) {

    genres = genresModel.getGenres();
    return res.json(genres)
});

// réponse à l'url "/genres/:name/movies"
router.get('/:id', function(req, res) {

    movies = moviesModel.getMoviesByGenre();
    return res.json(movies)
});


//\\ POST //\\

router.post('/', function (req, res) {

    genre = genresModel.newGenre();
    return res.json(genre)
});


//\\ PUT //\\

router.put('/:id', function (req, res) {

    genre = genresModel.editGenre();
    return res.json(genre)
});


//\\ DELETE//\\

router.delete('/:id', function (req, res) {

    genre = genresModel.deleteGenre();
});

module.exports = router;