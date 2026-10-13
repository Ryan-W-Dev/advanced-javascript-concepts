// Global Variable Example

// Variables declared outside any function are global
var globalVar = 'I am a global variable';

// In browsers, global variables become properties of the window object
// console.log(window.globalVar); // "I am a global variable"

function showGlobal() {
  // Global variables are accessible inside functions
  console.log(globalVar);
}

showGlobal(); // "I am a global variable"

// Assigning a value to an undeclared variable creates a global (bad practice!)
function createAccidentalGlobal() {
  accidentalGlobal = 'Oops, I am global too!';
}

createAccidentalGlobal();
console.log(accidentalGlobal); // "Oops, I am global too!"

// The danger: any part of the code can modify global variables
function modifyGlobal() {
  globalVar = 'I have been changed';
}

modifyGlobal();
console.log(globalVar); // "I have been changed"

// Best practice: use "use strict" to prevent accidental globals
('use strict');
function strictExample() {
  try {
    // This would throw a ReferenceError in strict mode
    // undeclaredVar = "error";
  } catch (e) {
    console.log(e);
  }
}

strictExample();
