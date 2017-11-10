const express = require('express');
const router = express.Router();
const ReviewsModel = require('../models/reviewsModel');
let reviewsModel = new ReviewsModel();


//\\ PUT //\\

router.put('/:id', function (req, res) {

    review = reviewsModel.editReview();
    return res.json(review)
});


//\\ DELETE//\\

router.delete('/:id', function (req, res) {

    review = reviewsModel.deleteReview();
});

module.exports = router;