const express = require('express');
const routes = express.Router()
module.exports = routes

routes.get('/', (req, res) => {
    return res.redirect('/teachers')
})

routes.get('/teachers', (req, res) => {
    return res.render('teachers')
})

routes.get('/students', (req, res) => {
    return res.render('students')
})

routes.use(function(req, res) {
    res.status(404).render('not-found');
})