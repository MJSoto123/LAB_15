const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Courses = require('../Models/course'); 
 
/* GET home page. */
router.get('/', function(req, res, next) {
      
    Courses.find((err, docs) => {
        if (!err) {
            res.render('../views/index', {
                data: docs
            });
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
 
});
module.exports = router;