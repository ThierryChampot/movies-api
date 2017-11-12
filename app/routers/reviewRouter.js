const express = require('express');
const router = express.Router();
const connection = require('../dbConnector');
const ReviewModel = require('../models/reviewModel');

const reviewModel = new ReviewModel(connection);

router.route('/')
    .post(function(req, res) {
        const body = req.body;
        reviewModel.createReview(body, function(err, data) {
            if(err) {
                console.log(err)
            } else {
                return res.json(data)
            }
        });
    });

module.exports = router;
