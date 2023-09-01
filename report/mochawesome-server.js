/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/mochawesome'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/mochawesome/mochawesome.html');
});

app.listen('1234', function() {
    console.log('Server started: localhost:1234/');
});
