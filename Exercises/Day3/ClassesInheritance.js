//TODO Fancy new ES 2015 Class
//remake our Meat and Produce class with calculatax method, name, and price
//as a fancy new class and not a function constructor, below is a template to help guide you, Vehicle is only an example of basic structor.
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  topSpeed() {
    //class method code here
    return "How fast does it go?";
  }
}
let momMinivan = new Vehicle("Dodge", "Caravan");
console.log(momMinivan);
console.log(momMinivan.topSpeed());
