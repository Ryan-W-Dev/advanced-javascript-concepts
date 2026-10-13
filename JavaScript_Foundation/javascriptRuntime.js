//Javascript runtime example
//Demonstrates the call stack, Web APIs, callback queue, and event loop

console.log('Hello, World!');
// Logs a message immediately
setTimeout(() => {
  // This code runs after the specified delay (1 second)
  console.log('This message is delayed by 1 second');
}, 1000);

setTimeout(() => {
  console.log('This runs after the synchronous code, even with 0ms delay');
}, 0);
// Synchronous code runs first, then the event loop handles the timers
console.log('This runs before the timers because the event loop empties the call stack first');
