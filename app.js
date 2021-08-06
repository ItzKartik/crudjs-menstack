const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/HariDB'
const app = express()

mongoose.connect(url, {newNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Hari Bol...')
})

const hariRouter = require('./routes/hari.js')
app.use('/hari', hariRouter)

app.listen(9000, () => {
    console.log('Server Started')
})