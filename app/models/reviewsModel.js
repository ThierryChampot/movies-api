class ReviewsModel {

    // Get an array of reviews by movie id
    getReviews() {

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

    // Create a new review by movie id
    newReview() {

    }

    // Edit a review by id
    editReview() {

    }

    // Delete a review by id
    deleteReview() {

    }

    // Delete all reviews by movie id
    deleteAllReviews() {

    }
}

module.exports = ReviewsModel;