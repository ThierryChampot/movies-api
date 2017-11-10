class PeopleModel {

    // get an array of all people
    getPeople() {

    }

    // get an array of people by movie id
    getMoviePeople() {

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

    // create a new person
    newPerson() {

    }

    // add a person to a movie
    newMoviePerson(){

    }

    // edit a person by id
    editPerson() {

    }

    // delete a person by id
    deletePerson() {

    }

    // delete the person of a movie by movie id
    deleteMoviePerson(){

    }
}

module.exports = PeopleModel;
