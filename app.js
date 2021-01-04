const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.listen(process.env.PORT || 3000, () => console.log('Ya podes ir a http://localhost:3000'))

