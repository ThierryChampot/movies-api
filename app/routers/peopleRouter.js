const express = require('express');
const router = express.Router();
const PeopleModel = require('../models/peopleModel');
let peopleModel = new PeopleModel();


//\\ GET //\\

// réponse à l'url "/people"
router.get('/', function(req, res) {

    people = peopleModel.getPeople();
    return res.json(people)
});


//\\ POST //\\

router.post('/', function (req, res) {

    people = peopleModel.newPerson();
    return res.json(people)
});

//\\ PUT //\\

router.put('/:id', function (req, res) {

    people = peopleModel.editPerson();
    return res.json(people)
});


//\\ DELETE//\\

router.delete('/:id', function (req, res) {

    people = peopleModel.deletePerson();
});

module.exports = router;