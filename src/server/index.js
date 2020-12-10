var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
/*
let projectData = {};

// Post Route
app.post("/addWeather", addWeather);

function addWeather(req, res){
    newEntry = {
        city: req.body.city,
        weather: req.body.weather,
        temperature: req.body.temperature,
        feelsLike: req.body.feelsLike,
        wind: req.body.wind
    }
    projectData = newEntry;
}

app.get("/all", getData);

// Callback function to complete GET '/all'
function getData (req, res) {
    res.send(projectData);
}*/
