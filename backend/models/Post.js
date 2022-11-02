const mongoose = require('mongoose');
const Joi = require('joi');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    content: {
        type: String,
        required: true,
        minlength: 10,
    },
    authors: {
        type: [String],
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        required: true
    }
})


const Post = mongoose.model('Post', postSchema);

const validatePost = (post) => {
    const schema = Joi.object({
        title: Joi.string().min(3).max(255).required(),
        content: Joi.string().min(500).required(),
        authors: Joi.array().items(Joi.string()).required(),
        image: Joi.string().required()
    })
    return schema.validate(post);
}

module.exports = {
    Post,
    validatePost,
    postSchema,
}