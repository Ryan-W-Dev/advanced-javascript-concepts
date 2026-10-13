// Variable Environment Example
function two() {
  var isValid; // local variable environment of two() - undefined
  console.log('two:', isValid); // undefined
}

function one() {
  var isValid = true; // local variable environment of one() - true
  console.log('one:', isValid); // true
}

var isValid = false; // global variable environment
one();
two();
console.log('global:', isValid); // false
// Each function has its own variable environment,
// so the global isValid stays false.
