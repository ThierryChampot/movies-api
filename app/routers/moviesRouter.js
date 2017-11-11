const express = require('express');
const router = express.Router();
const connection = require('../dbConnector');
const MovieModel = require('../models/moviesModel');

const movieModel = new MovieModel(connection);

// réponse à l'url "/movies/:id"
router.get('/:id', function(req, res) {
    const id = req.params.id;

    movieModel.getMovieById(id, function(err, data) {
        if(err) {
            console.log(err)
        } else {
            // Ajouter les détails acteurs...
            return res.json(data)
        }
    });
});

router.route('/')
    .all(function (req, res, next) {
        next();
    })
    .get(function(req, res, next) {
        movieModel.getAll(function(err, data) {
            if(err) {
                console.log(err)
            } else {
                return res.json(data)
            }
        })
    })
    .post(function (req, res, next) {
        const body = req.body;

        movieModel.createMovie(body, function(err, data) {
            if(err) {
                console.log(err)
            } else {
                // Ajouter les détails acteurs...
                return res.json(data)
            }
        })
    });

module.exports = router;