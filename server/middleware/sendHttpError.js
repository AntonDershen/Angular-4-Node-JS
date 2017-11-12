module.exports = function(err, request, response, next)
{
    if (response.headersSent) {
        return next(err);
    }
    response.status = err.status;
    response.send({ "error" : err });
}