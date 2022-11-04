const mongoose = require("mongoose");
const winston = require("winston");
module.exports = function () {
    mongoose.connect(
        'mongodb+srv://test:testfj3@mongotest.w0mvdvx.mongodb.net/?retryWrites=true&w=majority')
        .then(() => winston.info('Connected to database'))

}