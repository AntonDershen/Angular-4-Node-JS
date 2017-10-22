var util = require('util');
var path = require('path');
var http = require('http');

function HttpError(status, message){
    Error.apply(this, arguments);
    Error.captureStackTrace(this);

    this.status = status;
    this.message = message;
}

util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

module.exports = HttpError;