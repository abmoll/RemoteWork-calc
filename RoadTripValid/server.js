//server.js
var express = require('express')
var app = express()
total = 1;

// for every file inside this folder, makes a app.get route
// also for every request to server, check if request URL resembles file path in ./public
//if it does, res.sendFile that file, if not, call next()
app.use(express.static('./public'))

//var nasaUrl= "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-30&end_date=2017-10-31&api_key=nxDNl3KDNp3hoakhRWDKErj3kIbrw8SS5Y7UsCQi";
const request = require('request');

app.get('/cargo-validator', function(request, response){
  response.sendFile('./public/a-validator.html', {root: './'})
})

app.post('/validate-cargo', function(request, response){
  response.send("total items: " + total)
})

app.get('/hello', function(request, response) {
  response.send("Hello World");
})

app.listen(8080, function() {
  console.log('The app is running on 8080');
})
