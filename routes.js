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


routes.get('/teachers/:id', (req, res) => {

    const {id} = req.params

    const TeacherID = data.teachers.find((teacher) => {
        return teacher.id == id
    }) 

    if (!TeacherID) {
        return res.send('Instructor not-find')
    }

    return res.render('teachers/teacher', {teacher: TeacherID})

}) 

routes.post('/teachers', (req, res) => {
    
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
        return res.send('EMPTY FIELDS')
        }
    }

    req.body.years_old = Date.parse(req.body.years_old)
    req.body.created_at = Date.now()
    req.body.id = Number(data.teachers.length + 1)

    const {teach_avatar, teach_name, years_old, education_level, radio_input, teaching_area, created_at, id} = req.body

    data.teachers.push({
        id,
        teach_avatar,
        teach_name,
        years_old,
        education_level,
        radio_input,
        teaching_area,
        created_at,
    })

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