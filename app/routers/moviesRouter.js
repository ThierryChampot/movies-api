const express = require('express');
const router = express.Router();
const connection = require('../dbConnector');
const MovieModel = require('../models/moviesModel');

const movieModel = new MovieModel(connection);

// réponse à l'url "/movies"
router.get('/', function(req, res) {
    movieModel.getAll(function(err, data) {
        if(err) {
            console.log(err)
        } else {
            return res.json(data)
        }
    })
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