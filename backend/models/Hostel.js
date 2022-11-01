const mongoose = require('mongoose')
const Joi = require('joi')


const hostelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,

    },
    capacity: {
        type: Number,
        min: 0,
        required: true
    },
    population: {
        type: Number,
        min: 0,
        default: 0
    },
    status: {
        type: String,
        enum: ['active', 'closed'],
        default: 'active'
    },
    address: new mongoose.Schema({
        city: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true,
        },

    }),
    gallery: [String]

})

const Hostel = mongoose.model('Hostel', hostelSchema)

const validateHostel = (hostel) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(255).required(),
        capacity: Joi.number().min(0).required(),
        address: Joi.object().required(),
        gallery: Joi.array().items(Joi.string())
    })
    return Joi.validate(hostel)
}

