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

//function expression example
var greet = function () {
  console.log('Hello!');
};
greet(); // "Hello!" - works after assignment

//function declaration example
function welcome() {
  console.log('Welcome!');
}
welcome(); // "Welcome!" - works because function declarations are hoisted

//Exercise
var one = 1;
var two = 2;
console.log(one); // 1
console.log(two); // 2

// What the engine actually sees:
// var one;           <- hoisted declaration
// var two;           <- hoisted declaration
// console.log(one);  <- undefined
// console.log(two);  <- undefined
// one = 1;           <- assignment stays in place
// two = 2;           <- assignment stays in place

//Exercise two
var favouriteFood = 'Pizza';

var foodThoughts = 'I love ' + favouriteFood + '!';

var favouriteFood = 'Sushi';
console.log(foodThoughts); // "I love Pizza!" - works because the assignment to favouriteFood happens after foodThoughts is created

// What the engine actually sees:
// var favouriteFood;       <- hoisted declaration
// var foodThoughts;        <- hoisted declaration
// favouriteFood = 'Pizza'; <- assignment stays in place
// foodThoughts = 'I love ' + favouriteFood + '!'; <- assignment stays in place
// favouriteFood = 'Sushi'; <- assignment stays in place
// console.log(foodThoughts); <- "I love Pizza!"
