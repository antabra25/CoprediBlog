const winston = require('winston')
module.exports = function (error, req, res, next) {
    //log the exception
    winston.error(error.message, error)
    res.status(500).send('Something failed')
    next()

}

//error
// warn
//info
//verbose
//debug
//silly