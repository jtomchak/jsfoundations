//Function as a param of a function

function fullName(firstName, lastName, handler) {
  console.log("My name is " + firstName + " " + lastName);
  handler(lastName);
  handler(firstName);
}

var greeting = function(lname) {
  console.log("Welcome Mr. " + lname);
};
console.log(greeting);

fullName("Jackie", "Chan", greeting);
