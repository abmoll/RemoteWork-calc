//server.js

var express = require('express')

var app = express()

// for every file inside this folder, it makes an app.get route for you
app.use(express.static('./public'))

app.get('/', function(request, response){
  response.sendFile('./public/index.html', {root: './'})
  console.log("Welcome to the internet!")
})

app.get('/photo', function(request, response){
  response.sendFile('./public/Barcelona.jpg', {root: './'})
  console.log("sent a photo!")
})
// app.get('/main.js', function(request, response){
// response.sendFile('.public/js/main.js', {root: './'})
// })
// app.get('/main.css', function(request, response){
// response.sendFile('./public/css/main.css', {root: './'})
// })
// commented out
// app.get('/', function(request, response){
// response.send("Hello World")
// })

app.use(express.static('public'))

app.get('/hello', function(request, response){
  response.send("Hello World")
// response.send("Web page made by Alex")
})
app.get('/about', function(request, response){
  response.sendFile('./public/about.html', {root: './'})
// response.send("Web page made by Alex")
})

app.get('/Home', function(request, response){
  response.sendFile('./public/index.html', {root: './'})
// response.send("Web page made by Alex")
})

app.get('/SanFran', function(request, response){
  response.sendFile('./public/SanFran.html', {root: './'})
// response.send("Web page made by Alex")
})

app.get('/Boulder', function(request, response){
  response.sendFile('./public/Boulder.html', {root: './'})
// response.send("Web page made by Alex")
})

app.get('/NewYork', function(request, response){
  response.sendFile('./public/NewYork.html', {root: './'})
// response.send("Web page made by Alex")
})
app.get('/Barcelona', function(request, response){
  response.sendFile('./public/Barcelona.html', {root: './'})
// response.send("Web page made by Alex")
})
app.get('/Rome', function(request, response){
  response.sendFile('./public/Rome.html', {root: './'})
// response.send("Web page made by Alex")
})

app.get('/foo/bar', function(request, response){
  response.sendFile('./public/main.css', {root: './'})
// response.send("Web page made by Alex")
})

app.post('/form-submit', function(request, response){
  console.log("received post request!")
  //response.send("received the post request!")
  response.redirect('/about')
})

app.listen(8080, function() {
	console.log('The app is running on 8080')
})
