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
