class MovieModel {
    constructor (db) {
        this.db = db;
    }

    getAll(callback) {
        const movies = [];
        this.db.query("SELECT * FROM movie LIMIT 10", function(err, rows, fields) {
            // this.db.end();
            if (!err) {
                rows.forEach(movie => {
                    console.log(movie.title);
                    const obj = {
                        "id": movie.id,
                        "imdbId": movie.imdbId,
                        "title": movie.title,
                        "year": movie.year,
                        "plot": movie.plot,
                        "rating": movie.rating,
                        "votes": movie.votes,
                        "runtime": movie.runtime,
                        "trailerId": movie.trailerId,
                        "dateCreated": movie.dateCreated,
                        "dateModified": movie.dateModified
                    };
                    movies.push(obj);
                });

                callback(null, movies);
            }
            else
                callback('Error while performing Query.', [])
        });
    };

    getMovieById(id, callback) {
        this.db.query("SELECT * FROM movie WHERE id = ?", [id], function(err, rows, fields) {
            // this.db.end();
            if (!err) {
                callback(null, rows[0]);
            }
            else
                callback('Error while performing Query.', {})
        });
    };

    createMovie(body, callback) {
        console.log(body.title);
        const instant = new Date(Date.now()).toISOString();
        const sql =
            "INSERT INTO movie " +
            "(imdbId, title, year, plot, rating, votes, runtime, trailerId, dateCreated, dateModified) " +
            "VALUES ?";
        const values = [
            [
                body.imdbId,
                body.title,
                body.year,
                body.plot,
                body.rating,
                body.votes,
                body.runtime,
                body.trailerId,
                instant,
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
    };

    deleteMovie(id, callback) {
        this.db.query("DELETE FROM movie WHERE id = ?", [id], function(err, rows, fields) {
            // this.db.end();
            if (!err) {
                callback(null, {});
            }
            else
                callback('Error while performing Query.', {})
        });
    };
}

module.exports = MovieModel;
