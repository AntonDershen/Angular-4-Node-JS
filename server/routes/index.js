var User = require('./../database/models/user');
var HttpError = require('./../errors/HttpError');

module.exports = function(app)
{
    app.get('/', function(request, response, next) {
        response.render('index.html');
    });

    // app.get('/users', function(request, response, next){
    //     User.find({}, function(err, users){
    //         if(err) next(err);
    //         response.json(users);
    //     })
    // });

    // app.get('/user/:id', function(request, response, next){
    //     User.findById(request.param.id ,function(err, user){
    //         if(err) next(err);
    //         if(user == null){
    //             next(new HttpError("404", "User not found"));
    //         }
    //         response.json(user);
    //     })
    // });

};