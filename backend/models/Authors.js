const mongoose = require('mongoose')
const Joi = require('joi')


const authorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        default: 'M'
    }
})

const Author = mongoose.model('Author', authorSchema)

const validateAuthor = (author) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        lastName: Joi.string().required(),
        gender: Joi.string().required()

    })
    return schema.validate(author)

}

module.exports = {
    Author,
    validateAuthor
}
