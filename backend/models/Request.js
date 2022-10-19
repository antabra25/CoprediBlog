const mongoose = require('mongoose');
const Joi = require('joi')
const { User } = require('./User');

// request model


const requestSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum:['pending','approved','rejected'],
        default: 'pending'
    },
    type:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default:Date.now
    }
})

const Request = mongoose.model('Request', requestSchema)

const validateRequest = (request) =>{
    const schema = Joi.object({
        user: Joi.objectId().required(),
        message: Joi.string().required(),
        type: Joi.string().required()
    })
    return schema.validate(request)
}


module.exports = {
    Request,
    validateRequest


}