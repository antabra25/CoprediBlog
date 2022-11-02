const router = require('express').Router()
const {Post, validatePost} = require('../models/Post')
const validate = require('../middleware/validate')
const validateObjectId = require('../middleware/validateObjectId')


router.get('/', async (req, res) => {

    const {pageNumber, pageSize} = res.query
    if (!pageNumber && !pageSize) return res.status(400).send('Bad request')
    const posts = await Post.find().skip((parseInt(pageNumber) - 1) * pageSize).limit(parseInt(pageSize))
    res.status(200).send(posts)
})


router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (!post) return res.status(404).send('The post with the given ID was not found.')
    res.status(200).send(post)
})

router.post('/', validate(validatePost), async (req, res) => {

    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        authors: req.body.authors,
        image: req.body.image,
    })
    await post.save()
    res.status(201).send(post)

})

router.put('/:id', [validateObjectId, validate(validatePost)], async (req, res) => {
    const data = req.body

    const post = await Post.findById(req.params.id)
    if (!post) return res.status(404).send('The post with the given ID was not found.')

    post.title = data.title
    post.content = data.content
    post.authors = data.authors
    post.image = data.image

    await post.save()
    res.status(200).send(post)
})

router.delete('/:id', validateObjectId, async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id)
    if (!post) return res.status(404).send('The post with the given ID was not found.')

    res.status(200).send(post)
})


module.exports = router