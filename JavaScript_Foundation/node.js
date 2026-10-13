// Node.js Basics Example

// 1. Global objects
console.log('__dirname:', __dirname);
console.log('__filename:', __filename);
console.log('Node version:', process.version);

// 2. Built-in modules (CommonJS require)
const fs = require('fs');
const path = require('path');
const http = require('http');

// 3. Reading a file asynchronously
fs.readFile(path.join(__dirname, 'example.txt'), 'utf8', (err, data) => {
  if (err) {
    console.log('No example.txt found (that is fine):', err.code);
    return;
  }
  console.log('File contents:', data);
});

// 4. Writing a file
fs.writeFile('output.txt', 'Hello from Node.js!', (err) => {
  if (err) throw err;
  console.log('output.txt written successfully');
});

// 5. Simple HTTP server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from the API', timestamp: Date.now() }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// 6. Events
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit('greet', 'Node.js');
