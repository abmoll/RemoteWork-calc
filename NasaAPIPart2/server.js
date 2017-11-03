//server.js
var express = require('express');
var app = express();

// for every file inside this folder, makes a app.get route
app.use(express.static('./public'))

//var nasaUrl= "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-30&end_date=2017-10-31&api_key=nxDNl3KDNp3hoakhRWDKErj3kIbrw8SS5Y7UsCQi";
const request = require('request');

//req.query is query stream coming from the client
app.get('/api', function(req, res) {
  console.log(req.query);
  var nasaUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${req.query.start_date}&end_date=${req.query.end_date}&api_key=nxDNl3KDNp3hoakhRWDKErj3kIbrw8SS5Y7UsCQi`;
  request(nasaUrl, function(err, response, body) {
    console.log("started");
    //console.log(body)
    res.send(body);
  })
})

app.get('/', function(request, response) {
  response.sendFile('./public/index.html', {root: './'})
  console.log("Welcome to the internet!");
})

app.use(express.static('public'))

app.get('/hello', function(request, response) {
  response.send("Hello World");
})

app.get('/Home', function(request, response) {
  response.sendFile('./public/index.html', {
    root: './'
  })
})

app.get('/foo/bar', function(request, response) {
  response.sendFile('./public/main.css', {
    root: './'
  })
})

app.post('/form-submit', function(request, response) {
  console.log("received post request!")
  //response.send("received the post request!")
  response.redirect('/about');
})

app.listen(8080, function() {
  console.log('The app is running on 8080');
})