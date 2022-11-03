const router = require('express').Router();
const {Request, validateRequest} = require('../models/Request');
const {User} = require('../models/User');
const validate = require('../middleware/validate');


router.get('/', async (req, res) => {
    const {pageNumber, pageSize} = req.query;
    const requests = await Request.find().skip((parseInt(pageNumber) - 1) * pageSize).limit(parseInt(pageSize));
    if (!requests) return res.status(404).send('No requests found');
    res.status(200).send(requests);
})

router.get('/:id', async (req, res) => {
    const request = await Request.findById(req.params.id);
    if (!request) return res.status(404).send('The request with the given ID was not found.');
    res.status(200).send(request);
})


router.post('/', [validate(validateRequest)], async (req, res) => {
    const user = await User.findById(req.body.user);
    if (!user) return res.status(400).send('Invalid user.');
    const request = new Request({
        user: req.body.user,
        title: req.body.title,
        message: req.body.content,
        type: req.body.type,

    })
    await request.save();
    res.status(201).send(request);
})

router.put('/:id', async (req, res) => {
    const data = req.body;
    const request = await Request.findById(req.params.id);
    if (!request) return res.status(404).send('The request with the given ID was not found.');
    request.title = data.title;
    request.message = data.message;
    request.status = data.status;
    request.type = data.type;
    await request.save();
    res.status(200).send(request);
})

router.delete('/:id', async (req, res) => {
    const request = await Request.findByIdAndDelete(req.params.id);
    if (!request) return res.status(404).send('The request with the given ID was not found.');
    res.status(200).send(request);
})

module.exports = router