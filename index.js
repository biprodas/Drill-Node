const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');


// SET UP EXPRESS APP
const app = express();


// USE MIDDLE WARE, order in importent
// use body-parser middleware
app.use(bodyParser.json());
// initialize routes
app.use('/api', routes);



// LISTEN FOR REQUESTS
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});