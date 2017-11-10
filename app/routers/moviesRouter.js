const express = require('express');
const router = express.Router();

// réponse à l'url "/movies"
router.get('/', function(req, res) {
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
    return res.json({
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
    })
});

module.exports = router;