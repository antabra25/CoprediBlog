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

const postSchema =  new mongoose.Schema({
    title: {type: String, required: true},  // title is required
    content: {type: String, required: true},  // content is required
    date: {type: Date, required: true,default:Date.now},  // date is required
    author: {type: String, required: true},  // author is required
    image: {type: String, required: true},  // image is required
})
const Post =  mongoose.model('Post', postSchema);
async function createPost(post) {

    const result = await post.save();
    console.log(result);
}

async function getPosts(){
    const posts = await Post.find().select({title:1,content:1});
    console.log(posts);
}

const post = new Post({
    title: 'My second post',
    content: 'This is my second post',
    author: 'John Doe',
    image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'

})
createPost(post);


