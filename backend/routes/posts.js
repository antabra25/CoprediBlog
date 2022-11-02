const router = require('express').Router()
const {Post, validatePost} = require('../models/Post')
const validate = require('../middleware/validate')
router.get('/', async (req, res) => {
    console.log(req.query)
    if (!req.query.pageNumber && !req.query.pageSize) return res.status(400).send('Bad request')
    const pageSize = parseInt(req.query.pageSize)
    const pageNumber = parseInt(req.query.pageNumber)

    const posts = await Post.find().skip((pageNumber - 1) * pageSize).limit(pageSize)
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
        author: req.body.author,
        image: req.body.image,
    })
    await post.save()
    res.status(201).send(post)

})

module.exports = router