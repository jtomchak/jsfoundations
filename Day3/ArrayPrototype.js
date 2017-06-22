// is pineapple in the array?

var fruits = ["apple", "banana", "orange"];
var otherStuff = [2, 4, 5, 6, 4, 3];
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
