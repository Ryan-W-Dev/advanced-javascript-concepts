//Call stack
//The call stack is a mechanism for an interpreter (like the JavaScript engine) to keep track of its place in a script that calls multiple functions. It is a stack data structure that stores information about the active functions.

//Examples of call stack usage
function greet() {
  console.log('Hello, world!');
}

function main() {
  greet();
}

main();

//Another example of call stack usage
function subtract(num) {
  return num - 2;
}
function calculate() {
  const sumTotal = 2 + 2;
  return subtract(sumTotal);
}
calculate();

//Memory heap
//The memory heap is a region in memory where objects, strings, and other dynamic data are allocated. JavaScript engines use the memory heap to manage memory for objects and other reference types.

//Examples of memory heap allocation
const number = 42; //Allocated in the memory heap
const string = 'Hello, world!'; //Allocated in the memory heap
const human = { name: 'Alice', age: 30 }; //Allocated in the memory heap
