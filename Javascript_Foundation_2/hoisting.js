// Hoisting Example
// Hoisting: variable and function declarations are moved to the top
// of their scope during the compilation phase, before execution.

// --- Function hoisting ---
sayHi(); // "Hi!" - function declarations are fully hoisted

function sayHi() {
  console.log('Hi!');
}

// --- Variable hoisting with var ---
console.log(a); // undefined - declaration is hoisted, but not the assignment
var a = 5;
console.log(a); // 5

// What the engine actually sees:
// var a;            <- hoisted declaration
// console.log(a);   <- undefined
// a = 5;            <- assignment stays in place

// --- let and const (Temporal Dead Zone) ---
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

// --- Function expressions are NOT hoisted like declarations ---
// sayBye(); // TypeError: sayBye is not a function
var sayBye = function () {
  console.log('Bye!');
};
sayBye(); // "Bye!" - works after assignment
