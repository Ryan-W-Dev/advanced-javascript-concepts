// IIFE - Immediately Invoked Function Expression
// A function that is defined and called immediately

// Basic IIFE
(function () {
  console.log('This runs immediately!');
})();

// IIFE with parameters
(function (name) {
  console.log(`Hello, ${name}!`);
})('Wes');

// IIFE with a return value
const result = (function () {
  return 42;
})();

console.log(result); // 42

// Why use an IIFE?
// It creates a private scope, avoiding pollution of the global scope
(function () {
  const secret = 'hidden from the outside';
  var privateVar = 'not accessible globally';
  console.log(secret);
})();

// console.log(secret);     // ReferenceError: secret is not defined
// console.log(privateVar); // ReferenceError: privateVar is not defined

// Arrow function IIFE
(() => {
  console.log('Arrow IIFE!');
})();

// Practical use: module pattern
const counter = (function () {
  let count = 0; // private variable

  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    getCount() {
      return count;
    },
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(counter.decrement()); // 1
// console.log(counter.count);    // undefined - count is private

//This is better than global variables because it avoids polluting the global scope
