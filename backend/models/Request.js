const mongoose = require('mongoose');
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const {User} = require('./User');

// request model


const requestSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 150,
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Request = mongoose.model('Request', requestSchema)

const validateRequest = (request) => {
    const schema = Joi.object({
        user: Joi.objectId().required(),
        title: Joi.string().min(5).max(150).required(),
        message: Joi.string().required(),
        type: Joi.string().required()
    })
    return schema.validate(request)
}


module.exports = {
    Request,
    validateRequest

}