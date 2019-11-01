const express = require('express')
const app = express()

const index = require('./routers/index')
const filmes = require('./routers/filmesRouter')

app.use('/', index)
app.use('/filmes', filmes)

module.exports = app