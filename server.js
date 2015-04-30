var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var env = process.env.NODE_ENV || 'development';

if('development' === env) {
  // config dev only stuff here

}


// config middleware
app.use(bodyParser.json());

// static file paths
app.use(express.static(__dirname + '/public'));

// make ./bower_components accessible as /public/bower_components
app.use('/bower_components', express.static('bower_components'));


// app routes here



// default universal route
app.get('/*', function (req, res) {
  "use strict";

  res.render("index.jade");
});

app.listen(3000);
console.log('Starting in ' + env + ' mode');
console.log('Listening on port 3000');