var express = require('express');
var ejs = require('ejs');
var path = require('path');
var config = require('./config/index');
var app = express();
var bodyParser = require('body-parser');
var HttpError = require('./errors/HttpError');

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.use(express.static(path.join('', 'public')));
app.use(require('./middleware/sendHttpError'));

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

require('./routes/index')(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './../views/index.html'));
});

app.listen(config.get('port'));
console.log("Server listen port: " + config.get('port'));

module.exports = app;