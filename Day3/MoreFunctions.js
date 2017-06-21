//Creating a function
let iamFunction = new Function("x", "y", "return x*y;");
console.log(iamFunction(3, 3));

function moreFunction(x, y) {
  return x * y;
}
console.log(moreFunction(3, 3));

let ihazFunctionToo = function(x, y) {
  return x * y;
}
console.log(ihazFunctionToo(3, 3));

let andYetAnotherOne = (x, y) => x * y;
console.log(andYetAnotherOne(3, 3));


function Produce(name, price) {
  this.name = name;
  this.price = price;
  this.calculateTax = function() {
    return this.price * 0.08;
  }
}

let apple = new Produce('apple', 2.05);
let pinnapple = new Produce('pinnapple', 5.85);
console.log(apple);
// http://jsbin.com/rosijuxexa/2/edit?js,console


var Meat = function(name, price, cut) {
  this.name = name;
  this.price = price;
  this.cut = cut;
};
Meat.prototype = {
  calculateTax: function() {
    return this.price * .08;
  }
}

let Dinner = new Meat('porkchop', 10.99, 'butt');
console.log(Dinner.calculateTax());
