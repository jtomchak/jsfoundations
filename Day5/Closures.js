function cityLocation() {
  var city = "Paris";

  return {
    get: function() {
      console.log(city);
    },
    set: function(newCity) {
      city = newCity;
      console.log(city);
    }
  };
}

var myLocation = cityLocation();

console.log(myLocation);

myLocation.get(); // output: Paris
myLocation.set("Sydney");
myLocation.get(); //output: ?
