## Class Inheritance
* why do use it? 
* now we dev at a meat shop
* [Good Article](https://www.thoughtworks.com/insights/blog/composition-vs-inheritance-how-choose)

---

Composition over inheritance (or composite reuse principle) in object-oriented programming is the principle that classes should achieve polymorphic behavior and code reuse by their composition (by containing instances of other classes that implement the desired functionality) rather than inheritance from a base or parent class.[2] This is an often-stated principle of OOP, such as in the influential book Design Patterns.[3]

---

> Wha? 

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
let steak = new Meat('steak', 10.99, 't-bone');
let vegan = new Meat('Soy', 10.99, 'ewwww');
console.log(dinner.calculateTax());
```
---

# Error Handling
* Be a good developer
* handling all possible cases.....safely
* you only get 1 throw, no more!!!

---

![inline](https://javascript.info/article/try-catch/try-catch-flow@2x.png)

---
```javascript
try {
    Block of code to try
}
catch(err) {
    Block of code to handle errors
} 
finally {
    Block of code to be executed regardless of the try / catch result
}
```

---

```javascript
let puppies;

	try {
	    let result = puppies.peedInTheToilet();
	} catch (ex) {
	    console.log('oops!');
	}
```

---

```javascript
function productOrderValidationTask(productName, quantity) {
	    try {
	        if (quantity <= 0) {
	            throw new Error(`You need to enter a quantity for ${productName} greater than zero!`);
	        }
                 else {
	            return true;
	        }
	    } catch(ex) {
	        console.log(`${ex.name}: ${ex.message}`);
	    }
	}

	productOrderValidationTask("Milk", 2);
	productOrderValidationTask("Cheese", 0);  
```

---