const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items from the DB
// @access  Public
router.get('/', (req, res, next) => {
    console.log('GET REQUEST');
    Item
    .find({})
    .sort({ date: -1 })
    .then(items => res.send(items))
    .catch(next);
});

// @route   POST api/items
// @desc    Add a new Item to the DB
// @access  Public
router.post('/', (req, res, next) => {
    console.log('POST', req.body);
    const newItem = new Item({
        name: req.body.name
    });
    newItem
    .save()
    .then(item => res.send(item))
    .catch(next);
});

// @route   PUT api/items/:id
// @desc    Update A Item in the DB
// @access  Public
router.put('/:id', (req, res, next) => {
    console.log('PUT', req.params.id);
    Item
    .findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Item.findOne({_id: req.params.id}).then((item)=>{
            res.send(item);
        });
    })
    .catch(next);
});

// @route   DELETE api/items/:id
// @desc    Delete A Item from DB
// @access  Public
router.delete('/:id', (req, res, next) => {
    console.log('DELETE', req.params.id);
    Item.findByIdAndDelete({_id: req.params.id})
    .then((item) => res.send(item))
    .catch(next);
});


module.exports = router;