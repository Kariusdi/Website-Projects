const express = require('express')
const app = express()

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/html/about.html')
})

app.get('/news', (req, res) => {
    res.sendFile(__dirname + '/html/news.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/html/error.html')
})

app.listen(3000, () => {
    console.log("Start Server at port [3000]")
})