var express = require('express');
var router = express.Router();

//Mailing
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(
    smtpTransport('smtps://uname%40gmail.com:password@smtp.gmail.com')
);



//console
var prompt = require('prompt');


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('contact get');
    res.send('respond with a resource');
});

/* POST home page. */
// assuming POST: name=foo&color=red            <-- URL encoding
// or       POST: {"name":"foo","color":"red"}  <-- JSON encoding
router.post('/', function(req, res, next) {
    console.log('contact post1');

    var name = req.body.name,
        email = req.body.email,
        message = req.body.message;

    console.log(req.body);


    // verify connection configuration
    transporter.verify(function(error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take our messages');
        }
    });


    if (req.body.name && req.body.email && req.body.message) {
        // send mail
        transporter.sendMail({
            from: req.body.email,
            to: 'komogortev@gmail.com',
            subject: 'Contact message from ' + req.body.name,
            text: '<p>' + req.body.email + '<br>' + req.body.message + '</p>'
        }, function (error, response) {
            if (error) {
                console.log(error);
                var pageResponce = 'I could not receive your message. please <a href=/"http://komogortev.com//">try again</a>';
                res.send( pageResponce + ' contact:' + name +' : '+ email +' : '+ message);

            } else {
                pageResponce = 'Message has been sent';
                console.log(pageResponce);
                res.send( pageResponce + ' contact:' + name +' : '+ email +' : '+ message);

            }
        });
    }


    /*var bodyStr = '';
    req.on("data",function(chunk){
        bodyStr += chunk.toString();
    });
    req.on("end",function(){
        res.send(bodyStr);
    });
*/


});

module.exports = router;
