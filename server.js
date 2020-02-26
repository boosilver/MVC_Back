var express = require('express');
var app = express();
var cors  = require('cors')

//var users = require('./users');
var app = require('express')();
var port = process.env.PORT || 1596;  //http://localhost:1596
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors( {origin: '*'} ))

app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', function (req, res) {
    res.send('Hello Node.js');
});

app.get('/index', function (req, res) {
    res.send('This is index page');
});

app.use('/express',require('./router'));

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
 