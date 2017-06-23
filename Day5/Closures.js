function cityLocation() {
  var city = "Paris";

  return {
    get: function() {
      console.log(city);
    },
    set: function(newCity) {
      city = newCity;
    }
  };
}

var myLocation = cityLocation();

myLocation.get(); // output: Paris
myLocation.set("Sydney");
myLocation.get(); //output: ?
