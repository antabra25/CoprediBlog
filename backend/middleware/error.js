const winston = require('winston')
module.exports = function (error, req, res, next) {
    //log the exception
    winston.error(error.message, error)

    //error
    // warn
    //info
    //verbose
    //debug
    //silly

    res.status(500).send('Something failed')

}