const express = require('express')

const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server)

app.set('view engine', 'ejs')
app.use(express.static('public'))

const port = 3000

app.get('/', function (req, res) {
    res.render('index')
})

io.on('connection', function (socket) {
    console.log('A user connected')
})

app.get('/fout', function(req, res) {
    res.render('pages/fout')
})

app.get('/tank', function(req, res) {
    res.render('pages/tank')
})

app.get('/verander/tank', function (req, res) {
    res.render('change/tank')
})

app.get('/verander/plant', function(req, res) {
    res.render('change/plant')
})

app.get('verander/final', function(req,res) {
    res.render('final')
})

app.get('/plant', function (req, res) {
    res.render('pages/plant')
})

server.listen(port, function () {
    console.log('Server is online at ' + port)
})