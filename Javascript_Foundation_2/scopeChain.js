// Scope Chain Example

// Global Scope
var globalVariable = 'I am global';

function outerFunction() {
  // Outer Function Scope
  var outerVariable = 'I am outer';

  function innerFunction() {
    // Inner Function Scope
    var innerVariable = 'I am inner';

    // The scope chain allows access to variables from outer scopes
    console.log(innerVariable); // found in own scope
    console.log(outerVariable); // found in outerFunction's scope
    console.log(globalVariable); // found in global scope
  }

  innerFunction();

  // console.log(innerVariable); // ReferenceError: innerVariable is not defined
}

outerFunction();

// The scope chain: innerFunction -> outerFunction -> global scope
// JavaScript looks up variables starting from the current scope,
// then moves outward through each enclosing scope until it reaches
// the global scope. If not found anywhere, a ReferenceError is thrown.
