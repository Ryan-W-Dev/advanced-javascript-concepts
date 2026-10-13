// Example demonstrating JavaScript execution context and function calls

// --- Call Stack ---
// Each function call creates a new FUNCTION EXECUTION CONTEXT
// that is pushed onto the call stack:
//   1. Global Execution Context (created first, always at the bottom)
//   2. sayMyName()
//   3. findName()
//   4. printName()  <- top of stack, runs and pops off first
// Each context pops off the stack when it returns.

function printName() {
  return 'Ryan Wynn';
}

function findName() {
  return printName();
}

function sayMyName() {
  return findName();
}

console.log(sayMyName());

// --- Global Execution Context ---
// Before any code runs, JavaScript creates the global execution
// context which gives us the global object and 'this'.
// In a browser: this === window
console.log(this);

// --- Hoisting ---
// During the creation phase of an execution context, function
// declarations are fully hoisted, while variables declared with
// 'var' are hoisted but initialized as undefined.

console.log(hoistedVar); // undefined (declared but not yet assigned)
// console.log(notHoisted); // ReferenceError (let/const are in the temporal dead zone)

var hoistedVar = 'I am hoisted';
let notHoisted = 'I am not hoisted';

hoistedFunction(); // works: function declarations are fully hoisted

function hoistedFunction() {
  console.log('Function declarations are hoisted with their definition');
}

// --- Function Execution Context ---
// Every function creates its own execution context with its own
// variable environment, scope chain, 'this', and 'arguments'.

function showContext(a, b) {
  console.log(arguments); // array-like object of passed arguments
  var local = 'I only exist inside this execution context';
  return a + b + ' ' + local;
}

console.log(showContext('Hello', 'World'));
