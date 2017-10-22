module.exports = function(request, response, next)
{
    response.sendHttpError = function(error)
    {
        response.status = error.status;
        response.render("error", { error : error });
    }
    
    next();
}