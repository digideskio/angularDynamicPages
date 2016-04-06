
var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/visacal');

var app = express();

app.use(
    "/", //the URL throught which you want to access to you static content
    express.static(__dirname) //where your static content is located in your filesystem
);

app.use(bodyParser.json({limit: '1mb'}))
app.use(bodyParser.raw({limit: '5mb'}))
app.use(cookieParser())


app.all('/*',function(req,res,next){
    res.header('Access-Control-Allow-Origin' , '*' );
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authToken, ovenId');
    next(); // http://expressjs.com/guide.html#passing-route control
});


var dbController = require('./server/controller/db')();
var dbRoutes = require('./server/routes/db')(app, dbController).init();


app.listen(5000);
console.log('server start at port 5000');
exports.app = app
