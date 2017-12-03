autoscale: true
### Callbacks, but first a question ?
# Is Javascript synchronous or asynchronous ?

### synchronously, you wait for it to finish before moving on to another task. When you execute something asynchronously, you can move on to another task before it finishes

---
# Javascript, is single threaded, and  **synchronous**!

### *but we often use asynchronous patterns
### *Single threaded means that one command is being executed at a time.

---
# Callbacks
* just the name of a convention for using JavaScript functions.
* not a language feature, more of design pattern

---

```javascript
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
```


---

# :frowning:
```javascript
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
             //guess what happens here, yep, puppy killer, you guessed it
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```
---

![inline](https://www.twilio.com/blog/wp-content/uploads/2016/09/31orCejQRkSvmchYeZC2GKswNtst-d_xEoSPoP3X-bAm9RRe8hxz59vVZrrRm78VvJgVbuUo5R7dAikR2gY1rxtqQ14yMJP8K4CS3Siiir_wRpB6IYgoWGlpokE51vV4eYAI2lpP-1.png)

---

# Super Example aka Real Life
[Callback Example click here](http://jsbin.com/sakiqepato/8/edit?js,console)

---

## ok, so what about 
# Promises
## 'member we were gonna talk about them?

---

#  A promise has 3 states. They are:

1. Promise is pending: You don't know if you will get that phone until next week.
2. Promise is resolved: Your mom really buy you a brand new phone.
3. Promise is rejected: You don't get a new phone because your mom is not happy.

---
# Building a Promise
```javascript
/* ES5 */
var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);
```
---
# Consuming a Promise
```javascript
/* ES5 */
...

// call our promise
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
};

askMom();
```


