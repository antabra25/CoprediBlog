const router = require('express').Router()
const {Post, validatePost} = require('../models/Post')
const multer = require('multer')
const validate = require('../middleware/validate')
const validateObjectId = require('../middleware/validateObjectId')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')


router.get('/', async (req, res) => {

    if (!req.query.currentPage || !req.query.pageSize) return res.status(400).send('Bad request')
    const posts = await Post.find().skip((req.query.currentPage - 1) * req.query.pageSize).limit(req.query.pageSize)
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

router.put('/:id', [auth, admin, validateObjectId], async (req, res) => {
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

router.delete('/:id', [auth, admin, validateObjectId], async (req, res) => {

    const post = await Post.findById(req.params.id)
    if (!post) return res.status(404).send('The post with the given ID was not found.')
    await Post.deleteOne({_id: req.params.id})
    res.status(200).send(post)
})


module.exports = router