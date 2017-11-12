class ReviewModel {
    constructor (db) {
        this.db = db;
    }

    // Get an array of reviews by movie id
    getReviews() {

    }

    // Create a new review by movie id
    createReview(body, callback) {
        const instant = Date.now();
        const sql =
            "INSERT INTO review " +
            "(username, title, content, movieId, dateCreated) " +
            "VALUES ?";
        const values = [
            [
                body.username,
                body.title,
                body.content,
                body.movieId,
                instant
            ]
        ];

        this.db.query(sql, [values], function(err, result) {
            // this.db.end();
            if (!err) {
                callback(null, result);
            }
            else
                callback('Error while performing Query.', {})
        });
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

module.exports = ReviewModel;