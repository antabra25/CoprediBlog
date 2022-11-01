const mongoose = require('mongoose');
const Joi = require('joi')


// ADDRESS MODEL
const addressSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true,
        upperCase: true,
    },
    Municipality: {
        type: String,
        required: true,
        upperCase: true,
    },
    parish: {
        type: String,
        required: true,
        upperCase: true,
    },
    street: {
        type: String,
        required: true,
        uppercase: true,
    }
})

// USER MODEL
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    last_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    personal_id: {
        type: Number,
        required: true,
        min: 900000,

    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 1024,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    address: addressSchema,


})

const User = mongoose.model('User', userSchema)

const validateUser = (user) => {

    const schema = Joi.object({
        first_name: Joi.string().min(3).max(50).required(),
        last_name: Joi.string().min(3).max(50).required(),
        personal_id: Joi.number().min(900000).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(8).max(255).required(),
    })
    return schema.validate(user);

}
module.exports = {
    User,
    validateUser,
    userSchema
}