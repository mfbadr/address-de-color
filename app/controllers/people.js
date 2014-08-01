'use strict';

var Person = require('../models/person');

exports.index = function(req, res){
  Person.all( function(err, people){
    console.log(people);
    res.render('people/index', {people:people}); 
  });
};
