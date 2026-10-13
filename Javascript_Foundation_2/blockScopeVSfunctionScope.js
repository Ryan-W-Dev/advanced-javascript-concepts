// ==========================
// Function Scope Example
// ==========================
// Variables declared with `var` are FUNCTION scoped:
// they are accessible anywhere inside the function they
// are declared in, but NOT outside of it.

function functionScopeExample() {
  var functionVar = 'I am function scoped';

  if (true) {
    var alsoFunctionVar = 'var ignores blocks!';
    console.log(functionVar); // works
  }

  console.log(alsoFunctionVar); // works -> var is NOT block scoped
}

functionScopeExample();
// console.log(functionVar); // ReferenceError: functionVar is not defined

// ==========================
// Block Scope Example
// ==========================
// Variables declared with `let` and `const` are BLOCK scoped:
// they only exist inside the nearest pair of curly braces { }.

function blockScopeExample() {
  let outerLet = 'I live in the function block';

  if (true) {
    let blockLet = 'I am block scoped';
    const blockConst = 'Me too!';
    console.log(outerLet); // works -> inner blocks can see outer variables
    console.log(blockLet); // works
    console.log(blockConst); // works
  }

  console.log(outerLet); // works
  // console.log(blockLet);   // ReferenceError: blockLet is not defined
  // console.log(blockConst); // ReferenceError: blockConst is not defined
}

blockScopeExample();

// Loop Scope Example
function loop() {
  for (let i = 0; i < 3; i++) {
    console.log(i); // works
  }
  // console.log(i); // ReferenceError: i is not defined
}
loop();
