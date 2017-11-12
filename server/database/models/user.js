var mongoose = require('./../mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var schema = new Schema({
    userName : {
        'type' : 'string',
        'unique' : true,
        'required' : true
    },
    hashedPassword : {
        'type' : 'string',
        'required' : true
    },
    salt : 
    {
        'type' : 'string',
        'required' : true
    }
});

schema.methods.encryptPassword = function(password){
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
}

schema.virtual('password')
    .set(function(password){
        this._plainPassword = password;
        this.salt = random() + '';
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function(){ return this._plainPassword; });

schema.methods.checkPassword = function(password){
    return this.encryptPassword(password) === this.hashedPassword;
}

function random(){
    var date = new Date();
    var current_milliseconds = date.getMilliseconds();
    var current_seconds = date.getSeconds();
    var high = 0;
    var low = 0;

    if (current_milliseconds > current_seconds)
    {
        high = current_milliseconds;
        low = current_seconds;
    }

    if (current_milliseconds > current_seconds)
    {
        high = current_seconds;
        low = current_milliseconds;
    }

    if (current_milliseconds == current_seconds)
    {
        return random();
    }

    return Math.random() * (high - low) + low;
}

module.exports.User = mongoose.model('User', schema);
module.exports.Mongoose = mongoose;
