const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('<h1>Home<h2>')
})

server.get('/olamundo', (req, res) => {
    res.send('<h1>olá mundo<h1/>')
})

server.listen(3111, () => {
    console.log('Servidor funcionando em http://localhost:3111')
    console.log('Pra desligar nosso servidor: ctrl + c')
})
