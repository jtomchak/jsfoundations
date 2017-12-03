var fruits = ["apple", "banana", "orange"];

console.log("Is pineapple in the fruits array?");
if (fruits.indexOf("pinnapple") > -1) {
  //In the array!
  console.log("YES");
} else {
  console.log("NOPE");
}


console.log("Is pineapple in the fruits array?");
var answer = fruits.includes("pineapple");
console.log(answer);
