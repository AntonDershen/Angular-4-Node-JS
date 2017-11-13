var mongoose = require('./mongoose')
var user = require('./models/user')

mongoose.connection.on('open', function(){
    var db = mongoose.connection.db;
})