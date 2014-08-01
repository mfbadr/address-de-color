'use strict';

var express = require('express');
//var morgan = require('morgan');
//var bodyParser = require('body-parser');
// ^^^^^^ thse are only used in our pipeline, so we dont need them here

var app = express();

var config = require('./lib/config');
config(app);
//could also use require('.lib/config')(app);
// this is extra ninja


// lets import and call our pipeline the ninja way!
//var pipeline = require('./lib/pipeline')
//pipeline(app, express);
require('./lib/pipeline')(app, express);

// declare db name when initializing, just like PORT
var db = process.env.DB;
require('./lib/mongodb')(db);

var port = process.env.PORT;
app.listen(port, function(){
  console.log('Express is listening on PORT', port + '...');
});
