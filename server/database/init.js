var mongoose = require('./mongoose')
var user = require('./models/user')

mongoose.connection.on('open', function(){
    console.log('database open');
    var db = mongoose.connection.db;
    console.log('complete');
})