var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/home', function (req, res) {
  res.send('Home Page')
})

app.get('/about',function(req, res){
    res.send('About Us')
})

app.get('/nitish',function(req, res){
  res.send('Nitish Page')
})
app.listen(3001)
