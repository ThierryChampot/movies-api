const express = require('express');
const router = express.Router();
const connection = require('../dbConnector');
const MovieModel = require('../models/movieModel');

const movieModel = new MovieModel(connection);

// réponse à l'url "/movies/:id"
router.route('/:id')
    .get(function(req, res) {
        const id = req.params.id;

        movieModel.getMovieById(id, function(err, data) {
            if(err) {
                console.log(err)
            } else {
                // Ajouter les détails acteurs...
                return res.json(data)
            }
        });
    })
    .delete(function(req, res) {
        const id = req.params.id;

        movieModel.deleteMovie(id, function(err, data) {
            if(err) {
                console.log(err)
            } else {
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