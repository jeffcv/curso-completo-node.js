const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials/']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    const title = 'GameVerse Store'

    const segments = [
        {name: 'Nintendo', path: '/nintendo'},
        {name: 'Sony', path: '/sony'},
        {name: 'Microsoft', path: '/microsoft'}
    ]


    res.render('home', {title, segments})
})  

app.get('/nintendo', (req, res) => {
    res.render('category', {title: 'Nintendo', description: 'Os Melhores Jogos da Nintendo', class: 'nintendo'})
})

app.get('/sony', (req, res) => {
    res.render('category', { title: 'Sony', description: 'Os Melhores Jogos da Sony', class: 'sony' })
})

app.get('/microsoft', (req, res) => {
    res.render('category', { title: 'Microsoft', description: 'Os Melhores Jogos da Microsoft', class: 'microsoft' })
})

app.listen(3000, () => {
    console.log('App funcionando!')
})