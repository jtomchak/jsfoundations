# New the keyword
1. A Brand New Object Gets Created

---

# New the keyword
1. A Brand New Object Gets Created
2. The Created Object Gets [[Prototype]] linked

---

# New the keyword
1. A Brand New Object Gets Created
2. The Created Object Gets [[Prototype]] linked
3. The Created Object is set to this for that function call


---

# New the keyword
1. A Brand New Object Gets Created
2. The Created Object Gets [[Prototype]] linked
3. The Created Object is set to this for that function call
4. this (the newly constructed object) is automatically returned from the new-invoked function, unless it explicitly returns a different object

---

```javascript
function House(color) {
    this.color = color;
};

	
var houseOne = new House('Red');

	
console.log(typeof ouseOne);  //  object


```

---

```javascript
function House(color) {
    this.color = color;
};

House.prototype.whatcolor = function () {
    console.log('The color of this house is ' + this.color);
};

	
var houseOne = new House('Red');

	
console.log(typeof ouseOne);  //  object

houseOne.whatcolor(); // The color of this house is Red


```

---
call-site: the location in code where a function is called (not where it’s declared)

---

```javascript
//call-stack (the stack of functions that have been called to get us to the current moment in execution).

function cupcakes() {
  // call-stack is: `cupcakes`
  // so, our call-site is in the global scope
  console.log("cupcakes");
  puppies(); // <-- call-site for `puppies`
}

function puppies() {
  // call-stack is: `cupcakes` -> `puppies`
  // so, our call-site is in `cupcakes`
  console.log("puppies");
  kittens(); // <-- call-site for `kittens`
}

function kittens() {
  // call-stack is: `cupcakes` -> `puppies` -> `kittens` // so, our call-site is in `puppies`
  console.log("kittens");
}
cupcakes(); // <-- call-site for `cupcakes`
```

---
