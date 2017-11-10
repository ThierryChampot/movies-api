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
}

module.exports = MovieModel;
