var config = require('./../config/index');
var mongoose = require('mongoose');

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));
mongoose.Promise = global.Promise;

module.exports = mongoose;





