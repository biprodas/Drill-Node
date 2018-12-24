const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// SETUP EXPRESS APP
const app = express();


// CONNECT TO MONGODB
mongoose.connect('mongodb://localhost/courses',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;


// USE MIDDLE WARE, order is importent

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', routes);

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});



// LISTEN FOR REQUESTS
app.listen(process.env.port || 4000, () => {
    console.log('Now listening for requests...');
});