const express = require('express');
const socket = require('socket.io')

// APP SETUP
const app = express();

// LISTEN FOR REQUESTS
const server = app.listen(5000, () => {
    console.log('Now listening for requests on port 5000 ...');
});

// MIDDLEWARE
// Static files
app.use(express.static('public'));


// SOCKET SETUP & pass server
const io = socket(server);
io.on('connection', (socket) => {
    console.log('socket connection made..');

    // Handle chat event
    socket.on('chat', (data)=> {
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });
});