// ============================================
// JavaScript is SINGLE THREADED
// ============================================
// Single threaded means JavaScript has only ONE call stack
// and can only execute ONE thing at a time.
// Code runs line by line, top to bottom, in order.

// --------------------------------------------
// 1. Synchronous execution (one at a time)
// --------------------------------------------
console.log('1');
console.log('2');
console.log('3');
// Output order is guaranteed: 1, 2, 3

// --------------------------------------------
// 2. The Call Stack
// --------------------------------------------
// Each function call is pushed onto the stack,
// and popped off when it returns. LIFO (Last In, First Out).

function first() {
  console.log('first start');
  second();
  console.log('first end');
}

function second() {
  console.log('second');
}

first();
// Stack order: first() -> second() -> pop second -> pop first

// --------------------------------------------
// 3. Blocking the thread
// --------------------------------------------
// Because there is only ONE thread, a long-running
// synchronous task BLOCKS everything else.

function blockThread() {
  const start = Date.now();
  while (Date.now() - start < 2000) {
    // busy-wait for 2 seconds - nothing else can run!
  }
  console.log('finished blocking');
}

// blockThread(); // uncomment to feel the freeze
// console.log("this waits until blocking is done");

// --------------------------------------------
// 4. Asynchronous work (Web APIs + Event Loop)
// --------------------------------------------
// JavaScript itself is single threaded, but the browser
// (or Node) provides Web APIs so async work does NOT block.
// Callbacks are queued and run only when the stack is empty.

console.log('start');

setTimeout(() => {
  console.log('setTimeout callback'); // runs LAST, even with 0ms
}, 0);

Promise.resolve().then(() => {
  console.log('promise microtask'); // runs before setTimeout
});

console.log('end');

// Output:
// start
// end
// promise microtask   (microtask queue has priority)
// setTimeout callback (macrotask / callback queue)
