const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/produtosform.html`)
})

router.post('/save', (req, res) => {

    console.log(req.body)

    const name = req.body.name
    const quantidade = req.body.quantidade

    console.log(`Cadastrando ${quantidade} unidades de ${name}`)

    res.sendFile(`${basePath}/produtosform.html`)

})

router.get('/:produto', (req, res) => {
    const produto = req.params.produto

    console.log(`Estamos buscando pelo produto: ${produto}`)

    res.sendFile(`${basePath}/produtos.html`)
})

module.exports = router