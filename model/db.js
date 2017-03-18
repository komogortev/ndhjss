/*
* Requiring” Mongoose so that we can use it
* Defining the schema for a team
* Building a ‘model’ of this schema, called “Team”
* Connecting to the database, in this case a MongoDB database called ‘euro2012′ on the ‘localhost’ server
*/

var mongoose = require('mongoose');
var teamSchema = new mongoose.Schema({
    country: String,
    GroupName: String
});
mongoose.model('Team', teamSchema);
mongoose.connect('mongodb://localhost/euro2012');