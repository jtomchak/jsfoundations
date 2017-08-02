## Class Inheritance
* why do use it? 
* now we dev at a meat shop

---

```javascript
let meat1 = {
    name: 'Pork Chop',
    price: 8.33,
    calculateTax() {
        return this.price * .08;
    }
};

let meat2 = {
    name: 'Flank Steak',
    price: 2.99,
    calculateTax() {
        return this.price * .08;
    }
};

let meat3 = {
    name: 'T-Bone',
    price: 3.89,
    calculateTax() {
        return this.price * .08;
    }
};
``` 
---

![inline](http://yoan.dosimple.ch/blog/2009/04/11/shape.png)

---
```javascript
var Meat = function(name, price, cut) {
  this.name = name;
  this.price = price;
  this.cut = cut;
  this.calculateTax = function() {
    return this.price * .08;
  }
};



let dinner = new Meat('porkchop', 10.99, 'butt');
console.log(dinner.calculateTax());
```

