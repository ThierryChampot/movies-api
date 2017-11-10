const express = require('express');
const router = express.Router();
const MoviesModel = require('../models/moviesModel');
const GenresModel = require('../models/genresModel');
const PeopleModel = require('../models/peopleModel');
const ReviewsModel = require('../models/reviewsModel');
let moviesModel = new MoviesModel();
let genresModel = new GenresModel();
let peopleModel = new PeopleModel();
let reviewsModel = new ReviewsModel();


//\\ GET //\\

// réponse à l'url "/movies"
router.get('/', function(req, res) {

    movies = moviesModel.getMovies();
    return res.json(movies)
});

// réponse à l'url "/movies/:id"
router.get('/:id', function(req, res) {

    movie = moviesModel.getMovieDetails();
    genres = genresModel.getMovieGenres();
    people = peopleModel.getMoviePeople();
    reviews = reviewsModel.getReviews();
    all = [movie, genres, people, reviews];
    return res.json(all)
});


//\\ POST //\\

router.post('/', function (req, res) {

    movie = moviesModel.newMovie();
    genres = genresModel.newMovieGenre();
    people = peopleModel.newMoviePerson();
    return res.json()
});

router.post('/:id/reviews', function (req, res) {

    reviews = reviewsModel.newReview();
    return res.json()
});


//\\ PUT //\\

router.put('/movies/:id', function (req, res) {

    movie = moviesModel.editMovie();
//    Voir pour la modif des autres éléments
    return res.json()
});


//\\ DELETE //\\

router.delete('movies/:id', function (req, res) {

    movie = moviesModel.deleteMovie();
    genres = genresModel.deleteMovieGenre();
    people = peopleModel.deleteMoviePerson();
    reviews = reviewsModel.deleteAllReviews();
});

module.exports = router;