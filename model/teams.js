/*
* Takes a ‘GroupName’ value as a parameter
* Takes a callback function as a second parameter
* Searches the MongoDB database for teams with the provided ‘GroupName’
* Send the database output to the callback function.
 */

var mongoose = require('mongoose');
exports.teamlist = function teamlist(gname, callback) {

    var Team = mongoose.model('Team');//ref to db.js

    Team.find({
        'GroupName': gname
    }, function(err, teams) {
        if (err) {
            console.log(err);
        } else {
            console.log('retrieve db teams: ',teams);
            callback("", teams);
        }
    }); // end Team.find
}; // end exports.teamlis