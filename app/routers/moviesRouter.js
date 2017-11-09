var express = require('express');
var router = express.Router();

// inclure les controleurs 
const MoviesCtrl = require('./controllers/moviesCtrl');
const moviesCtrl = new moviesCtrl();

// réponse à l'url "/movies"
router.get('/', function(req, res) {
  moviesCtrl.getMovies.bind(moviesCtrl);
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
router.get(':id/directors', function(req,res) {
    moviesCtrl.getDirectorsByMovieId.bind(moviesCtl);
})

// réponse à l'url "/movies/:id/writers"
router.get(':id/writers', function(req,res) {
    moviesCtrl.getWritersByMovieId.bind(moviesCtrl);
    });

// réponse à l'url "/movies/:id/genres"
router.get(':id/writers', function(req,res) {
    moviesCtrl.getWritersByMovieId.bind(moviesCtrl);
    });

module.exports = router;