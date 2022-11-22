const validate = require('../middleware/validate')
const {Author, validateAuthor} = require('../models/Authors')
const router = require('express').Router()


router.get('/', async (req, res) => {
    const authors = await Author.find()
    res.status(200).send(authors)
})


router.get('/:id', async (req, res) => {
    const author = await Author.findById(req.params.id)
    if (!author) return res.status(404).send('The post with the given ID was not found.')
    res.status(200).send(author)
})

router.post('/', [validate(validateAuthor)], async (req, res) => {

    const author = new Author({
        name: req.body.name,
        lastName: req.body.lastName,
        gender: req.body.gender
    })

    await author.save()
    res.status(201).send(author)


})

module.exports = router