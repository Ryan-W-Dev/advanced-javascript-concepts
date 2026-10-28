// JavaScript is dynamically typed: a variable can hold values of different types.
let value = 42;
console.log(typeof value); // "number"

value = 'hello';
console.log(typeof value); // "string"

// Types are checked at runtime, and operators can coerce values.
console.log('5' + 1); // "51" (string concatenation)

// In a statically typed language, types are checked before the program runs.
// TypeScript adds static type checking to JavaScript:
// let count: number = 42;
// count = "hello"; // Type error: a string cannot be assigned to a number.
