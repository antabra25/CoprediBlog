const {Hostel, validateHostel} = require('../models/hostel');
const router = require('express').Router();
const validate = require('../middleware/validate');


router.get('/', async (req, res) => {
    const {pageNumber, pageSize} = req.query
    if (!pageNumber && !pageSize) return res.status(400).send('Bad request')
    const hostels = await Hostel.find().sort('name').skip((pageNumber - 1) * pageSize).limit(pageSize)
    res.status(200).send(hostels);
})


router.get('/:id', async (req, res) => {
    const hostel = await Hostel.findById(req.params.id)
    if (!hostel) return res.status(404).send('The hostel with the given ID was not found.')
    res.status(200).send(hostel)
})

router.post('/', validate(validateHostel), async (req, res) => {

    const body = req.body
    const hostel = new Hostel({
        name: body.name,
        capacity: body.address,
        population: body.population,
        address: body.email,
        gallery: body.gallery,
    })
    await hostel.save()
    res.status(201).send(hostel)
})

router.put('/:id', validate(validateHostel), async (req, res) => {

    const body = req.body
    const hostel = await Hostel.findById(req.params.id)
    hostel.name = body.name
    hostel.capacity = body.capacity
    hostel.population = body.population
    hostel.status = body.status
    hostel.address = body.address
    hostel.gallery = [...hostel.gallery, ...body.gallery]

    await hostel.save()
    res.status(200).send(hostel)

})


router.delete('/:id', async (req, res) => {

    const hostel = await Hostel.findById(req.params.id)
    if (!hostel) return res.status(404).send(`The posts with ${req.params.id} not exists`)
    await Hostel.deleteOne({_id: req.params.id})
    res.status(200).send(hostel)
})

module.exports = router
