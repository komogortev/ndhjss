var express = require('express');
var router = express.Router();

//console
var prompt = require('prompt');


//set routes
var home = require('./home');
var users = require('./users');
var contact = require('./contact');


router.use('/', home);
router.use('/home', home);

router.use('/users', users);

router.use('/contact', contact);


module.exports = router;
