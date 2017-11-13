var util = require('util');
var path = require('path');
var http = require('http');

function httpError(status, message){
    Error.apply(this, arguments);
    Error.captureStackTrace(this);

    this.status = status;
    this.message = message;
}

util.inherits(httpError, Error);
httpError.prototype.name = 'httpError';

module.exports = httpError;