const express = require("express");
const posts = require("../routes/posts");
const requests = require("../routes/requests");
const hostels = require("../routes/hostels");
const users = require("../routes/users");
const auhtors = require('../routes/authors')
const auth = require("../routes/auth");

const error = require('../middleware/error');
module.exports = (app) => {
    app.use(express.json());
    app.use('/api/posts', posts);
    app.use('/api/requests', requests);
    app.use('/api/hostels', hostels);
    app.use('/api/users', users);
    app.use('/api/authors',auhtors);
    app.use('/api/login', auth);
    app.use(error)
}