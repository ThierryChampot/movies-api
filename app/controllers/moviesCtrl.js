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
		return res.json({'id':1,'title':'super film 2'})
	}

	getActorsByMovieId(req,res)
	{
		return res.json({'id':14, 'name':'Reaves'})
	}

	getDirectorByMovieId(req,res)
	{
		return res.json({'id':15, 'name':'Director'})
	}

	getWritersByMovieId(req,res)
	{
		return res.json({'id':15, 'name':'WriterName'})
	}
}

module.exports = MoviesCtrl;