class MoviesCtrl
{
    getMovies()
    {
        return res.json([
                {'id':1,'title':'super film 2'},
                {'id':2,'title':'super film 2'}
            ])
    }
    
    getMovieById(id)
    {
        return res.json({'id':1,'title':'super film 2'})
    }

    getActorsByMovieId(id)
    {
        return res.json({'id':14, 'name':'Reaves'})
    }

    getDirectorsByMovieId(id)
    {
        return res.json({'id':15, 'name':'Director'})
    }

    getWritersByMovieId(id)
    {
        return res.json({'id':15, 'name':'WriterName'})
    }
}

module.exports = MoviesCtrl;