// is pineapple in the array?

var fruits = ["apple", "banana", "orange"];
Array.prototype.contains = function() {
  var i = this.length;
  while (i--) {
    if (this[i] == "pineapple") {
      console.log(true);
    } else if (this[i] != "pineapple") {
      console.log(false);
    }

  }
}
fruits.contains();
