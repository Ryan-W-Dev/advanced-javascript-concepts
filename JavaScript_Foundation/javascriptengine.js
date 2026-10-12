const isHappy = true;

// The V8 Engine is the fastest and most popular javascript engine. Written in C++, it powers Google Chrome and Node.js.
// It is used to execute JavaScript code efficiently.
/*
  This is a multi-line comment.
  You can use it to provide detailed explanations or documentation.
*/

// Exercise: Check if the user is happy and log a message accordingly
if (isHappy) {
  console.log('The user is happy!');
} else {
  console.log('The user is not happy.');
}

// Function to simulate a simple JavaScript engine that splits code into tokens
function jsengine() {
  return code.split(/\s+/);
}

jsengine('var a = 5');

//BAbel is a JavaScript compiler that allows you to use next-generation JavaScript features by transforming them into a version compatible with current browsers.
//Typescript is a superset of JavaScript that adds static types, enabling better tooling and error checking during development.
//Both of these do exactly what compilers do: they transform code from one form to another to ensure compatibility and enhance development experience.
// Jit compiler
// A Just-In-Time (JIT) compiler is a part of the JavaScript engine that improves performance by compiling code into machine code at runtime, rather than interpreting it line by line.
// This allows frequently executed code to run much faster compared to traditional interpretation.
// Example: V8 uses a JIT compiler to optimize JavaScript execution in Chrome and Node.js.

//.exe are most of the time used for executable files on Windows systems. Written in machine code, these files can be executed directly by the operating system without the need for an interpreter. Normally writtien in C or C++.

//JVM (Java Virtual Machine) is an abstract computing machine that enables a computer to run Java programs as well as programs written in other languages that are compiled to Java bytecode. It interprets the bytecode and executes it on the host machine, providing platform independence.

//bytecode is an intermediate representation of code that is executed by a virtual machine, such as the JVM. It is platform-independent and allows programs to run on any system with the appropriate virtual machine. Or a javascript engine like V8 can execute bytecode after compiling JavaScript source code into it. You cannot run it directly on the hardware without the virtual machine or engine.

//Is javascript an interpreted language or a compiled language?
//JavaScript is traditionally considered an interpreted language because it is executed by the JavaScript engine at runtime. However, modern JavaScript engines like V8 use Just-In-Time (JIT) compilation to improve performance, which means JavaScript can also be compiled to machine code at runtime.

//This is alkso true when it comes to something like Python, which is traditionally interpreted but can also be compiled to bytecode for execution by the Python virtual machine.
