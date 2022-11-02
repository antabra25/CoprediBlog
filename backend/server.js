const mongoose = require('mongoose');
const express = require('express')
const posts = require('./routes/posts')

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

app.listen(3000,()=>{
    console.log('Listening on port 3000')
})






