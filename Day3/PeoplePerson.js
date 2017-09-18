//Below is the object from yesterday. Pretend I shaved, set the beard to false. And add city to the address as a property and set the value to 'Phoenix'

//Name, SirName, age
//3  Instances of that beardPerson
// let peoplePerson = {
//   name: "Jesse",
//   sirName: "Tomchak",
//   fullName: function(){
//     return this.name + " " + this.sirName;
//   },
//   age: 109,
//   beard: true,
//   address: {
//     street: "3027 Tipperary",
//     state: "AZ"
//   },
//   hobbies: new Array("hang gliding", "yoga", "yoda", "tennis", "meow")
// };

var PeoplePerson = function(name, sirName, age) {
  this.name = name;
  this.sirName = sirName;
  this.age = age;
  this.beard = true;
  this.address = {
    street: "3027 Tipperary",
    state: "AZ"
  };
  this.hobbies = new Array("hang gliding", "yoga", "yoda", "tennis", "meow");
};

let bobby = new PeoplePerson("Bobby", "Jones", 34);
let donny = new PeoplePerson("Donny", "Smith", 44);
let billy = new PeoplePerson("Billy", "Honner", 64);
console.log(bobby);
console.log(donny);
console.log(bobby);
