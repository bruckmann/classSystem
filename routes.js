const express = require('express');
const routes = express.Router()
const fs = require('fs')
const data = require('./data.json')
module.exports = routes

routes.get('/', (req, res) => {
    return res.redirect('/teachers')
})

routes.get('/teachers', (req, res) => {
    return res.render('teachers/index')
})

routes.get('/teachers/signin', (req, res) => {
    return res.render('teachers/signin')
})

routes.post('/teachers', (req, res) => {
    
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
        return res.send('EMPTY FIELDS')
        }
    }

    data.teachers.push(req.body)

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {

        if (err) {
        return res.send('Write file error')
        }

        return res.redirect('/teachers')
    })

})

routes.use(function(req, res) {
    res.status(404).render('not-found');
})