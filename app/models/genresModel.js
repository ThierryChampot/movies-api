class GenresModel {

    // get an array of all genres
    getGenres() {

    }

    // get an array of genres by movie id
    getMovieGenres() {

        return {
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
        }
    }

    // create a new genre
    newGenre() {

    }

    // add a genre to a movie
    newMovieGenre() {

    }

    // edit a genre by id
    editGenre() {

    }

    // delete a genre by id
    deleteGenre() {

    }

    // delete a genre of a movie by movie id
    deleteMovieGenre() {

    }
}

module.exports = GenresModel;