class MoviesCtrl
{
	getMovies(req, res)
	{
		return [
				{'id':1,'title':'super film 2'},
				{'id':2,'title':'super film 2'}
			]
	}
	getMovieById(req, res)
	{
		return {'id':1,'title':'super film 2'}
	}
}

module.exports = MoviesCtrl;