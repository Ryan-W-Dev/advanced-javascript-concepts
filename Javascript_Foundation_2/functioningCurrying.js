// Currying: transforming a function that takes multiple arguments
// into a sequence of functions that each take a single argument.

// Regular function
function multiply(a, b, c) {
  return a * b * c;
}

// Curried version
function curriedMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2, 3, 4)); // 24
console.log(curriedMultiply(2)(3)(4)); // 24

// Currying lets you create specialized functions (partial application)
const multiplyByTwo = curriedMultiply(2);
const multiplyByTwoAndThree = multiplyByTwo(3);

console.log(multiplyByTwoAndThree(4)); // 24
console.log(multiplyByTwoAndThree(10)); // 60

// Same thing with arrow functions
const curriedAdd = (a) => (b) => (c) => a + b + c;

console.log(curriedAdd(1)(2)(3)); // 6

const addFive = curriedAdd(5);
console.log(addFive(1)(1)); // 7

// Practical example: curried logging function
const log = (date) => (type) => (message) =>
  console.log(`[${date.toISOString()}] [${type}]: ${message}`);

const logNow = log(new Date());
const logErrorNow = logNow('ERROR');

logErrorNow('Something went wrong!');
logNow('INFO')('Everything is fine.');
