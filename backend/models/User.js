const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi')


// ADDRESS MODEL
const addressSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true,
        uppercase: true,
    },
    municipality: {
        type: String,
        required: true,
        uppercase: true,
    },
    parish: {
        type: String,
        required: true,
        uppercase: true,
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
    personalId: {
        type: Number,
        required: true,
        min: 900000,
    },
    email: {
        type: String,
        required: true,
        unique: true,
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

userSchema.statics.hashPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

userSchema.methods.generateAuthToken = function () {
    const data = {
        _id: this._id,
        isAdmin: this.isAdmin,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
    }
    const token = jwt.sign(data, config.get('jwtPrivateKey'));
    return token;
}

const User = mongoose.model('User', userSchema)

const validateUser = (user) => {

    const schema = Joi.object({
        first_name: Joi.string().min(3).max(50).required(),
        last_name: Joi.string().min(3).max(50).required(),
        personalId: Joi.number().min(900000).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(8).max(1024).required(),
        address: Joi.object({
            state: Joi.string().required(),
            municipality: Joi.string().required(),
            parish: Joi.string().required(),
            street: Joi.string().required(),
        })
    })
    return schema.validate(user);

}
module.exports = {
    User,
    validateUser,
}