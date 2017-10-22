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
        this.salt = Math.random + '';
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function(){ return this._plainPassword; });

schema.methods.checkPassword = function(password){
    return this.encryptPassword(password) === this.hashedPassword;
}

module.exports = mongoose.model('User', schema);


