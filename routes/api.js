const express = require ('express');
const router = express.Router();

// get a list of courses from the db
router.get('/courses', function(req, res){
    res.send({type: 'GET'});
});

// add a new course to the db
router.post('/courses', function(req, res){
    console.log('POST request of new Course\n', req.body)
    res.send({
        type: 'POST',
        course : req.body
    });
});

// update a course in the db
router.put('/courses/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a course from the db
router.delete('/courses/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;