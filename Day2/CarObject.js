var car = {
  speed: 30,
  increaseSpeed(milesPerHour) {
    return this.speed += milesPerHour;
  }
};
car.increaseSpeed(10);
console.log(car);
//{ speed: 40, increaseSpeed: [Function: increaseSpeed] }
//{ speed: 40, increaseSpeed: [Function: increaseSpeed] }

// function calculateTax(product) {
//   return product.price * .08;
// }

// let product = {
//   name: 'Milk',
//   price: 2.33,
//   calculateTax() {
//     return this.price * 0.08;
//   }
// };
//
// let appleProduct = {
//   name: 'Apple',
//   price: 2.33,
//   calculateTax() {
//     return this.price * 0.18;
//   }
// }
//
// let tax = product.calculateTax();
// let Appletax = appleProduct.calculateTax();
// console.log(tax);
// console.log(Appletax);
