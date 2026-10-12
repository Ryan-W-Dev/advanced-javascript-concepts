// Run from the project root: node JavaScript_Foundation/memoryLeak.js
// No extra packages are needed: EventEmitter is built into Node.js.
const { EventEmitter } = require('node:events');

// A memory leak happens when data we no longer need stays reachable.
// Garbage collection cannot tell that we are finished with reachable data.
// Filling an array a fixed number of times is not, by itself, a memory leak.

// Imagine an app that sends updates to whichever screen is open.
// This event source lives longer than any individual screen.
const appEvents = new EventEmitter();

// LEAK: closing a screen forgets to unsubscribe from updates.
function openLeakyScreen(id) {
  const screenData = new Array(10000).fill('Data used by this screen');

  function onUpdate() {
    // This closure keeps screenData reachable, even after the screen closes.
    console.log(`Screen ${id} received an update (${screenData.length} items).`);
  }

  appEvents.on('update', onUpdate);

  return function closeScreen() {
    console.log(`Closed screen ${id}, but its listener is still registered.`);
    // BUG: the screen is no longer needed, but onUpdate was never removed.
  };
}

console.log('\n--- Leaking version: open and close three screens ---');
for (let id = 1; id <= 3; id++) {
  const closeScreen = openLeakyScreen(id);
  closeScreen();
}

console.log('Listeners left after closing:', appEvents.listenerCount('update')); // 3
appEvents.emit('update'); // All three CLOSED screens still respond!

// The reference chain explains the leak:
// appEvents -> registered onUpdate functions -> each screen's screenData array
// Every new screen leaves another listener and array behind.

// Reset this demo's private emitter before running the fixed version.
// In a real app, remove only your screen's listener, as shown below.
appEvents.removeAllListeners('update');

// FIX: unsubscribe the exact same function when its screen closes.
function openFixedScreen(id) {
  const screenData = new Array(10000).fill('Data used by this screen');

  function onUpdate() {
    console.log(`Screen ${id} received an update (${screenData.length} items).`);
  }

  appEvents.on('update', onUpdate);

  return function closeScreen() {
    appEvents.off('update', onUpdate);
    console.log(`Closed screen ${id} and removed its listener.`);
  };
}

console.log('\n--- Fixed version: open and close three screens ---');
for (let id = 1; id <= 3; id++) {
  const closeScreen = openFixedScreen(id);
  closeScreen();
}

console.log('Listeners left after closing:', appEvents.listenerCount('update')); // 0
appEvents.emit('update'); // No closed screens respond.

// With the listeners removed and no other references kept, the screen data
// becomes eligible for garbage collection. Collection is not necessarily immediate.
// Listener counts show the retained callbacks; they do not measure heap usage.

// Other common causes follow the same pattern:
// 1. Long-lived arrays, maps, or global variables retaining data no longer needed.
// 2. Forgotten intervals retaining data through callbacks: use clearInterval().
// 3. Removed DOM elements still referenced by reachable JavaScript objects.
