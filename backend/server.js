const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://test:testfj3@mongotest.w0mvdvx.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
    console.log('Connected to database');
})
    .catch(() => {
            console.log('Connection failed');
        }
    );




