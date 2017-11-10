const express = require('express');
const router = express.Router();

// inclure les controleurs 
const MoviesCtrl = require('../controllers/moviesCtrl');
const moviesCtrl = new MoviesCtrl();

// réponse à l'url "/movies"
router.get('/', function(req, res) {
  moviesCtrl.getMovies.bind(moviesCtrl);
    return res.json([
        {
            "id":1,
            "imdbId": "imdb ID",
            "title": "Super titre",
            "year": 2006,
            "plot": "si j'avais 10 dollars",
            "rating": 8,
            "votes": 666,
            "runtime": 42,
            "trailerId": "youtube ID",
            "dateCreated": "2016-02-21",
            "dateModified": "2016-02-21"
        },
        {
            "id":2,
            "imdbId": "imdb ID2",
            "title": "Super titre 2",
            "year": 2006,
            "plot": "j'irais au super sexe",
            "rating": 7,
            "votes": 696,
            "runtime": 21,
            "trailerId": "youtube ID",
            "dateCreated": "2016-02-19",
            "dateModified": "2016-02-20"
        },
    ])
});

// réponse à l'url "/movies/:id"
router.get('/:id', function(req, res) {
    moviesCtrl.getMovieById.bind(moviesCtrl);
  });

// réponse à l'url "/movies/:id/actors"
router.get('/:id/actors', function(req,res) {
    moviesCtrl.getActorsByMovieId.bind(moviesCtrl);
    });

// réponse à l'url "/movies/:id/directors"
router.get('/:id/directors', function(req,res) {
    moviesCtrl.getDirectorsByMovieId.bind(moviesCtl);
})

// réponse à l'url "/movies/:id/writers"
router.get('/:id/writers', function(req,res) {
    moviesCtrl.getWritersByMovieId.bind(moviesCtrl);
    });

// réponse à l'url "/movies/:id/genres"
router.get('/:id/writers', function(req,res) {
    moviesCtrl.getWritersByMovieId.bind(moviesCtrl);
    });

module.exports = router;
