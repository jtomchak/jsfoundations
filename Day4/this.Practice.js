//1. Using this in Extracted
//https://jsbin.com/yucoto/2/edit
var car = {
  brand: "Nissan",
  getBrand: function() {
    console.log(this.brand);
  }
};

var getCarBrand = car.getBrand;

getCarBrand(); // output: undefined

//2. this Used in Callbacks
//https://jsbin.com/coqota/2/edit
<button id="btn" type="button">
  Get the car's brand
</button>;

var car = {
  brand: "Nissan",
  getBrand: function() {
    console.log(this.brand);
  }
};

var el = document.getElementById("btn");
el.addEventListener("click", car.getBrand);

//3. this Used Inside Closures
//https://jsbin.com/sozafa/1/edit
var car = {
  brand: "Nissan",
  getBrand: function() {
    var closure = function() {
      console.log(this.brand);
    };
    return closure();
  }
};

car.getBrand(); // output: undefined

//4.
