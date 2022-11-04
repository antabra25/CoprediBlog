const winston = require('winston')
const error = require('./middleware/error')
const express = require('express');
const app = express();


require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
app.use(error)


const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`))






