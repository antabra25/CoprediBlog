const mongoose = require('mongoose');
const Joi = require('joi');
const {Author} = require('../models/Authors');


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
        minlength: 100,
    },
    authors: {
        type: [ mongoose.Schema.Types.ObjectId],
        ref:'Author'
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        required: false
    }
})


const Post = mongoose.model('Post', postSchema);

const validatePost = (post) => {
    const schema = Joi.object({
        title: Joi.string().min(3).max(255).required(),
        content: Joi.string().min(100).required(),
        authors: Joi.array().items(Joi.string()).required(),
        image: Joi.string()
    })
    return schema.validate(post);
}

module.exports = {
    Post,
    validatePost,
    postSchema,
}