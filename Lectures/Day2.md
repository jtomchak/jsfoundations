autoscale: true

# Boolean Logic

### It's true or false, right?

---

# Naming, variables like

* var hasThing;
* let isOfThing;
* const hasEnabledThing;

---

# Boolean Operators

* && (AND)
  * both much evaluate to true
* || (OR)
  * only one needs to evaluate to true
* ! (NOT)
  * inverts the bool

---

```javascript
true && true; //output is true
false && true; //output is false
false || true; //output is true
```

---

# Relational Operators

* Greater Than, Less Than
  * `> < >= <=`
* Not equal
  * `!=`
* Equality
  * `==`
* Wha?
  * `===`

---

# Strings and Template LIterals

* Useful string methods
  * `split()`
  * `toLowerCase()`
  * `trim()`
  * `replace()`
  * [Learn More!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

# String concatenation

* `"kittens" + "are cute"` // kittensare cute
* `"dogs " + "are fine"` // dogs are fine

```javascript
const pants = "dockers";

console.log("I wear " + pants); // I wear dockers

//ES2015
console.log(`I wear ${pants}`); // I wear dockers
```

---

# Decision Constructs

* if and if-else statements

```javascript
const evaluateSomething = true;

if (evaluateSomething) {
  doStuff();
}

//Evaluates the condition
//this will execute if the condition is true
```

---

# Decision Constructs

* and the if-else

```javascript
const evaluateSomething = false;

if (evaluateSomething) {
  doStuff();
} else {
  otherwiseDoThis();
}
```

---

# Decision Constructs

* and the else if part

```javascript
const evaluateSomething = false;
const evaluateOtherThing = true;

if (evaluateSomething) {
  doStuff();
} else if (evaluateOtherThing) {
  otherwiseDoThis();
}
```

---

# Nested if Statements :frowning:

```javascript
if (Check#1)
{
    CodeBlock#1
    if (Check#2)
    {
        CodeBlock#2
        if (Check#3)
        {
            CodeBlock#3
            if (Check#4)
            {
                CodeBlock#4
                if (Check#5)
                {
                    CodeBlock#5
                    if (Check#6)
                    {
                        CodeBlock#6
                        if (Check#7)
                        {
                            CodeBlock#7
                        }
                        else
                        {
                            a puppy has died
                        }
                    }
                }
            }
        }
    }
}
```

---

## Loop Constructs

* silly powerful

```javascript
for (var i = 0; i < 5; i++) {
  console.log(i);
}
```

---

## Math

* there are some math methods
* when you need one, look it up, no really

```javascript
// Returns a random integer between min (included) and max (included)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

---
