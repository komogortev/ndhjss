var express = require('express');
var router = express.Router();

//console
var prompt = require('prompt');

//get db
var teamdata = require('../model/teams');

/* GET home page. */
router.get('/', function(req, res, next) {
    //sample responce
    // res.render('index', { title: 'Express' });
    console.log('home get');

    var strGroup = "D";
    teamdata.teamlist(strGroup, function(err, teamlist) {
        res.render('index', {
            title: 'Test web page on node.js using Express and Mongoose',
            pagetitle: 'Hello there',
            group: strGroup,
            teams: teamlist
        });
    });

});

/* POST home page. */
// assuming POST: name=foo&color=red            <-- URL encoding
// or       POST: {"name":"foo","color":"red"}  <-- JSON encoding
router.post('/', function(req, res, next) {
    console.log('home post1');

    var name = req.body.name,
        email = req.body.emai;
    console.log(req.body);

    res.render('index', {
        title: name,
        pagetitle: name,
        group: email
    });

    var bodyStr = '';
    req.on("data",function(chunk){
        bodyStr += chunk.toString();
    });
    req.on("end",function(){
        res.send(bodyStr);
    });



});

module.exports = router;
