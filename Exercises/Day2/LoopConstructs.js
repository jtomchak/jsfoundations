//TODO for-loop
//We want to console only even numbers from 0-10




//TODO for-in JS Object
//THis gives us the properties, but we want the values too
let peoplePerson = {
  name: "Jesse",
  sirName: "Tomchak",
  age: 109,
  beard: true,
};
for (var property in peoplePerson) {
  if (peoplePerson.hasOwnProperty(property)) {
    console.log(property);
  }
}
