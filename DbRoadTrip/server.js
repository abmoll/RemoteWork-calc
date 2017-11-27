//server.js
var express = require('express')
var app = express()
var total = 1;
var bodyParser = require('body-parser')
const request = require('request');
var mongoose = require('mongoose') // we dont need mongo since mongoose

mongoose.connect('mongodb://localhost:27017/roadtrip')

// for every file inside this folder, makes a app.get route
// also for every request to server, check if request URL resembles file path in ./public
//if it does, res.sendFile that file, if not, call next()
app.use(express.static('./public'))

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

//create a schema that defines properties of valid roadtrip document
var tripSchema = new mongoose.Schema({
  weight: Number,
  fund: Number,
  stuff: [{
    //object
    item: String,
    numItems: Number
  }]
})

//create a model
var TripModel = mongoose.model('Trip', tripSchema)

// app.get('/doublecandy', function(req, res) {
//   TripModel.find({
//     name: 'CottonCandy'
//   }, function(err, data)) {
//     data[0].calories = data[0].calories * 2
//     data[0].save(function() {
//       res.send(data[0])
//       res.send(data)
//     })
//   })
// })

app.get('/allTrip', function(req, res) {
    TripModel.find(function(err, data) {
      //data is an array of every trip object
      res.send("All Trips" + data)
    })
})

// app.get('/', function(req, res)) {
//     var newTrip = new TripModel({
//       weight = 0,
//       fund = 0,
//       stuff: []
//     })
//   })
//
//     newTrip.save(function(err) {
//           // error here if object does not match schema
//           if err {
//             res.send(err)
//           } else {
//             res.send('saved the trip')
//           }
//         }

  app.get('/cargo-validator', function(request, response) {
    response.sendFile('./public/a-validator.html', {
      root: './'
      })
    })

  app.post('/validate-cargo', function(request, response) {

          new TripModel(request.body).save(function(err,data){
            //console.log("Error:", err)
            //response.send("save successful")
          })
          console.log(request.body);
          console.log(request.body.stuff);
          console.log(typeof request.body.stuff);
          console.log("weight:" + request.body.weight);
          console.log("fund:" + request.body.fund);
          console.log(request.body.stuff[0].item);
          console.log(request.body.stuff[0].numItems);
          if (request.body.weight > 200) console.log("you are over your weight limit")
          if (request.body.fund < 0) console.log("you have run out of funds")
          response.send("got your data!")
  })

        app.get('/hello', function(request, response) {
          response.send("Hello World");
        })

        app.listen(8080, function() {
          console.log('The app is running on 8080');
        })

        app.get('/Home', function(request, response) {
          response.sendFile('./public/index.html', {
            root: './'
          })
        })

        app.get('/SanFran', function(request, response) {
          response.sendFile('./public/SanFran.html', {
            root: './'
          })
        })

        app.get('/Boulder', function(request, response) {
          response.sendFile('./public/Boulder.html', {
            root: './'
          })
        })

        app.get('/NewYork', function(request, response) {
          response.sendFile('./public/NewYork.html', {
            root: './'
          })
        })

        app.get('/Barcelona', function(request, response) {
          response.sendFile('./public/Barcelona.html', {
            root: './'
          })
        })

        app.get('/Rome', function(request, response) {
          response.sendFile('./public/Rome.html', {
            root: './'
          })
        })
