const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const routes = require('./routes')
const { request } = require('express')

server.use(express.urlencoded({extended:true}))
server.use(express.static('public'))
server.use(routes)

nunjucks.configure("views", {
    express:server,
    noCache: true,
    autoescape: false
})

server.set("view engine" , "njk")

server.listen(3000 , () => {
    console.log("servidor online papito")
})