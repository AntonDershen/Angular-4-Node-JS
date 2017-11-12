var Database = require('./../database/models/user');
var HttpError = require('./../errors/HttpError');
var path = require('path');
var jwt = require('jsonwebtoken');
var config = require('./../config/index');

module.exports = function(app)
{
    app.get('/api/users', function(request, response, next){
        Database.User.find({} ,function(err, users){
            return response.json(users);
        })
    });

    app.post('/api/user/getById', function(request, response, next){
        Database.User.findById(request.body.id ,function(err, user){
            if(err) return next(err);
            if(user != null){
               return next(new HttpError("404", "User not found"));
            }
            return response.json(user);
        })
    });

    app.post('/api/user/isUserExists/', function(request, response, next){
        Database.User.findOne({userName : request.body.username} ,function(err, user){
            if(err) return next(err);
            if(user != null){
                return response.json({result : true});
            }
            return response.json({result : false});
        })
    });

    app.post('/api/registration', function(request, response, next){
        Database.User.findOne({userName : request.body.username} ,function(err, user){
            var result = false;
            if(err) return next(err);
            if(user == null){
                var userData = new Database.User({
                    userName: request.body.username,
                    password: request.body.password
                });
                
                userData.save(function(error, data){
                });
                result = true;
            }
            return response.json({'result' : result});
        })
    });

    app.post('/api/authentificate', function(request, response, next){
        Database.User.findOne({userName : request.body.username} ,function(err, user){
            if(err) return next(err);
            if(!user){
                response.json({ success: false, message: 'Authentication failed. User not found.' });
            }
            else if(user)
            {
                if (!user.checkPassword(request.body.password)) {
                    response.json({ success: false, message: 'Authentication failed. Wrong password.' });
                }
                else{
                    var payload = {
                        id: user._id,
                        userName: user.userName
                    };
                    response.json({ success: true, token: jwt.sign(payload, config.get("jwt.key"))});
                }
            }
        })
    });

};