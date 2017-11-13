var crypto = require('crypto');

module.exports = function(schema)
{
    schema.methods.checkPassword = function(password){
        return this.encryptPassword(password) === this.hashedPassword;
    }
    schema.methods.encryptPassword = function(password){
        return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
    }
    schema.methods.random = function random(){
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
}
