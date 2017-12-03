var alpha = {
  valueOf: function() {
    return "42";
  }
};

var beta = {
  toString: function() {
    return "42";
  }
};

var cepha = [4, 2];
cepha.toString = function() {
  return this.join(""); // "42"
};

console.log(Number(alpha)); // 42
console.log(Number(beta)); // 42
console.log(Number(cepha)); // 42
console.log(Number("")); // 0
console.log(Number([])); // 0
console.log(Number(["abc"])); // NaN

// From that table, we get the following as the so-called "falsy" values list:
// undefined
// null
// false
// +0, -0, and NaN
// ""

//TODO
var a = new Boolean(false);
var b = new Number(0);
var c = new String("");

//What is d ? True or False ?
var d = Boolean(a && b && c);



//TODO
var e = []; // empty array -- truthy or falsy?
var f = {}; // empty object -- truthy or falsy?
var g = function() {}; // empty function -- truthy or falsy?

//What is 'pants' True or False ?
var pants = Boolean(a && b && c);






//TODO
let superBool = function(x, y, z) {
  if (x == 4 && (!(y != 1) || z == 0)) {
    console.log("I made it!!!");
  } else {
    console.log("Didn't quite make it");
  }
}

//Execute the function above so that it consoles 'I made it'!!
