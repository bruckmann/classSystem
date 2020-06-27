const express = require('express');
const routes = express.Router()
module.exports = routes

routes.get('/', (req, res) => {
    return res.redirect('/teachers')
})

routes.get('/teachers', (req, res) => {
    return res.render('teachers')
})

routes.get('/teachers/signin', (req, res) => {
    return res.render('signin')
})

routes.post('/teachers/signin', (req, res) => {
    req.body
    return res.send(req.body)
})

routes.use(function(req, res) {
    res.status(404).render('not-found');
})