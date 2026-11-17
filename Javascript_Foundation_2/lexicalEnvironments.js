// Lexical Environment Example
// Lexical environment = where the code is written determines
// what variables/functions are accessible (scope chain).

function printName() {
  return 'Ryan Wynn';
}

function findName() {
  // 'a' is defined INSIDE findName's lexical environment,
  // so the inner function() has access to it via the scope chain.
  function a() {
    // inner lexical environment -> outer (findName) -> global
  }
  return printName();
}

function sayMyName() {
  return findName();
}

sayMyName(); // 'Ryan Wynn'

// Another example: lexical scoping with closures
function outer() {
  const outerVariable = 'I am outside!';

  function inner() {
    // 'inner' has access to outerVariable because it was
    // lexically written inside 'outer'
    console.log(outerVariable);
  }

  return inner;
}

const myInnerFunction = outer();
myInnerFunction(); // 'I am outside!' — inner still remembers its lexical environment
