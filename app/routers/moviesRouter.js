const express = require('express');
const router = express.Router();
const MoviesModel = require('../models/moviesModel');
let moviesModel = new MoviesModel();


//\\ GET //\\

// réponse à l'url "/movies"
router.get('/', function(req, res) {

    moviesModel.getMovies(res);
});

// réponse à l'url "/movies/:id"
router.get('/:id', function(req, res) {

    moviesModel.getMovieDetails(res)
    // Ajouter les détails acteurs...
});


//\\ POST //\\

router.post('/', function (req, res) {

    moviesModel.newMovie()
});

module.exports = router;