var mongoose = require('./../mongoose');
var schema = mongoose.Schema;


var userSchema = new schema({
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

require('./../helpers/crypto.helper')(userSchema);

userSchema.virtual('password')
.set(function(password){
    this._plainPassword = password;
    this.salt = this.random() + '';
    this.hashedPassword = this.encryptPassword(password);
})
.get(function(){ return this._plainPassword; });

module.exports = mongoose.model('User', userSchema);
