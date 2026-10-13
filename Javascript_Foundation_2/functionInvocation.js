//Function Expression
var sayHello = function () {
  console.log('Hello!');
};
sayHello(); // "Hello!" - works after assignment

//Function Declaration
function greet() {
  console.log('Hello!');
}
greet(); // "Hello!" - works because function declarations are hoisted

//Function
//Invocation/Call/Execution example
sayHello(); // "Hello!" - invoking the function expression
greet(); // "Hello!" - invoking the function declaration

//Function with parameters example
function marry(person1, person2) {
  console.log(person1 + ' is marrying ' + person2 + '!');
}
marry('Alice', 'Bob'); // "Alice is marrying Bob!" - invoking the marry function
