const express = require("express");
const posts = require("../routes/posts");
const requests = require("../routes/requests");
const hostels = require("../routes/hostels");
const users = require("../routes/users");
const auth = require("../routes/auth");
module.exports = (app) => {
    app.use(express.json());
    app.use('/api/posts', posts);
    app.use('/api/requests', requests);
    app.use('/api/hostels', hostels);
    app.use('/api/users', users);
    app.use('/api/login', auth);
}