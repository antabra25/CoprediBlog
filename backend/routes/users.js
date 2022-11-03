const router = require('express').Router()
const auth = require('../middleware/auth')
const _ = require('lodash')
const {User, validateUser, addressSchema} = require('../models/User');
const validate = require('../middleware/validate')

router.get('/', [auth], async (req, res) => {
    const users = await User.find()
    res.send(users)
})

router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password')
    res.send(user)
})

router.post('/', [validate(validateUser)], async (req, res) => {
    let user = await User.findOne({email: req.body.email})
    if (user) return res.status(400).send('User already registered.')

    user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        personalId: req.body.personalId,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
    })
    user.password = await User.hashPassword(user.password)
    await user.save()

    const token = user.generateAuthToken()
    res.header('access-control-expose-headers', 'x-auth-token')
        .header('x-auth-token', token)
        .send(_.pick(user, ['_id', 'first_name', 'last_name', 'email']))
})

module.exports = router
