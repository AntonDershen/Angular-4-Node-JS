var express = require('express');
var ejs = require('ejs');
var path = require('path');
var config = require('./config/index');
var app = express();
var routes = require('./routes/index')(app);
var HttpError = require('./errors/HttpError');

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(express.static(path.join('', 'public')));
app.use(require('./middleware/sendHttpError'));


// app.use(function(err, request, response, next){
//     if( typeof err == 'number')
//     {
//         err = new HttpError(err, 'error');
//     }
//     if( err instanceof HttpError)
//     {
//         response.sendHttpError(err);
//     }
// });

app.listen(config.get('port'));

module.exports = app;