const express = require ('express');
const router = express.Router();
const Course = require('../models/course');


// get a list of courses from the db
router.get('/courses', (req, res, next) => {
    Course.find({}).then(course => {
        res.send(course);
    }).catch(next);
});

// add a new course to the db
router.post('/courses', (req, res, next) => {
    //console.log('POST: ', req.body)
    Course.create(req.body).then((course) => {
        res.send(course);
    }).catch(next);
});

// update a course in the db
router.put('/courses/:id', (req, res, next) => {
    //console.log('PUT',req.params.id);
    Course.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Course.findOne({_id: req.params.id}).then((course)=>{
            res.send(course);
        });
    }).catch(next);
});

// delete a course from the db
router.delete('/courses/:id', (req, res, next) => {
    //console.log('DELETE', 'id:'+req.params.id);
    Course.findByIdAndDelete({_id: req.params.id}).then((course) => {
        res.send(course);
    }).catch(next);
});


module.exports = router;