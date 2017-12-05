//call-site: the location in code where a function is called (not where it’s declared).

//call-stack (the stack of functions that have been called to get us to the current moment in execution).

function cupcakes() {
  // call-stack is: `cupcakes`
  // so, our call-site is in the global scope
  console.log("cupcakes");
  puppies(); // <-- call-site for `puppies`
}

function puppies() {
  // call-stack is: `cupcakes` -> `puppies`
  // so, our call-site is in `cupcakes`
  console.log("puppies");
  kittens(); // <-- call-site for `kittens`
}

function kittens() {
  // call-stack is: `cupcakes` -> `puppies` -> `kittens` // so, our call-site is in `puppies`
  console.log("kittens");
}
cupcakes(); // <-- call-site for `cupcakes`

//Default Binding
function banana() {
  console.log(this.a);
}
var a = 2;
banana(); // 2


//Implicit Binding
function dumpster() {
  console.log(this.a);
}
var bacon = {
  a: 43,
  dumpster: dumpster
};
bacon.dumpster(); // 43


//Implicit Lost
function lost() {
  console.log(this.apples);
}
var basket = {
  apples: 190,
  lost: lost
};
var boat = basket.lost; // function reference/alias!
apples = "not my beatuiful house";
boat();

//Explicit
function shoe() {
  console.log(this.a);
}
var iamObject = {
  a: 2222
};
shoe.call(iamObject); // 2222

//Hard Binding
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
var obj = {
  a: 2
};
var bar = function() {
  return foo.apply(obj, arguments);
};
var b = bar(3); // 2 3
console.log(b); // 5
// Since hard binding is such a common pattern, it’s provided with a built-
// in utility as of ES5, Function.prototype.bind, and it’s used like this:
