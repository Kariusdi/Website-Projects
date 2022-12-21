const express = require('express')
const app = express()


app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/html/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/html/about.html')
})

app.get('/news', (req, res) => {
    res.sendFile(__dirname + '/html/news.html')
})

app.get('*', (req, res) => {
    console.log(__dirname + '/html/error.html')
    res.sendFile(__dirname + '/html/error.html')
})

app.listen(3000, () => {
    console.log("Start Server at port [3000]")
})