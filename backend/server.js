require('express-async-errors')
const winston = require('winston')
const error = require('./middleware/error')
const config = require('config');
const mongoose = require('mongoose');
const express = require('express');
const posts = require('./routes/posts')

winston.add(winston.transports.File, {filename: 'logfile.log'})

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.')
    process.exit(1)
}


mongoose.connect(
    'mongodb+srv://test:testfj3@mongotest.w0mvdvx.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
            console.log('Connection failed');
        }
    );

const app = express();

app.use(express.json());
app.use('/api/posts', posts);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));






