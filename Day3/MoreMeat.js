class Meat {
  constructor(name, price, cut) {
    this.name = name;
    this.price = price;
    this.cut = cut;
  }
  calculateTax() {
    return this.price * .08;
  }
};

let dinner = new Meat('porkchop', 10.99, 'butt');
console.log(dinner.calculateTax());
