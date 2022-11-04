const winston = require('winston')
require('express-async-errors')
require('winston-mongodb')

module.exports = function () {
    winston.handleExceptions(
        new winston.transports.File({filename: 'uncaughtExceptions.log'}),
    )
    process.on('unhandledRejection', (ex) => {
        throw ex;
    })
    winston.add(winston.transports.File, {filename: 'logfile.log'})
    winston.add(winston.transports.MongoDB, {
        db: 'mongodb+srv://test:testfj3@mongotest.w0mvdvx.mongodb.net/?retryWrites=true&w=majority',
        level: 'error'
    })
}