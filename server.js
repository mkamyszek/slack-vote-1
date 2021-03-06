var express = require('express');
var bodyParser = require('body-parser');

var server = module.exports = express();
var router = require('./routes/index.js');

server.use( bodyParser.json( ) );
server.use( bodyParser.urlencoded( {extended: false} ) );
server.use( router );

var port = process.env.port || 3000;
var hostname = process.env.hostname || "localhost";

server.on('error', function (error) {
    console.log(error);
    //we'll handle error here after adding cluster option.
});

server.listen(3000, hostname, function () {
    console.log('Up and running on port ' + port + " for " + hostname);
});