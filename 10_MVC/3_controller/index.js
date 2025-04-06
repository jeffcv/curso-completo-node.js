const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const app = express()

const hbs = exphbs.create({})

const Task = require('./models/Task')

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

conn
.sync()
.then(() => {
    app.listen(3000)
})
.catch((err) => console.log(err))