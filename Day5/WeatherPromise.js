var http = require("http");
var fetch = require("node-fetch");
//63a12df03524d4271e29ea55930cce2d

const weatherURL =
  "http://openweathermap.org/data/2.5/weather?zip=85016,us&appid=b1b15e88fa797225412429c1c50c122a1";

function getWeatherFor(city) {
  fetch(weatherURL)
    .then(resp => resp.json())
    .then(function(data) {
      // Here you get the data to modify as you please
      console.log(data.main);
    })
    .catch(function(error) {
      // If there is any error you will catch them here
    });
}

getWeatherFor("Phoenix");

console.log("Creating a simple HTTP request");
http
  .get("http://api.ipify.org?format=json", function(res) {
    var body = ""; // Will contain the final response
    // Received data is a buffer.
    // Adding it to our body
    res.on("data", function(data) {
      body += data;
    });
    // After the response is completed, parse it and log it to the console
    res.on("end", function() {
      var parsed = JSON.parse(body);
      console.log(parsed);
    });
  })
  // If any error has occured, log error to console
  .on("error", function(e) {
    console.log("Got error: " + e.message);
  });
