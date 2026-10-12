//Recursion example that will cause a stack overflow
function inception() {
  inception(); //Inception occurs here, leading to stack overflow
}
inception(); //Inception is causing a stack overflow by repeatedly calling itself without a termination condition

//Javascript is a garbage-collected language, meaning it automatically manages memory allocation and deallocation. However, stack overflows occur when the call stack exceeds its limit due to excessive recursion or deeply nested function calls.

//Garbage collector is responsible for automatically reclaiming memory occupied by objects that are no longer in use, helping to prevent memory leaks.
//Gives us a false sense of security that memory management is entirely our responsibility, when in reality, the garbage collector handles it automatically. However, developers should still be mindful of memory usage and avoid creating unnecessary references to objects that are no longer needed.
// In C and C++, memory management is manual, meaning developers are responsible for allocating and deallocating memory using functions like malloc() and free(). This gives more control but also increases the risk of memory leaks and segmentation faults if not handled properly. It means they are memory efficient but at the cost of increased complexity and potential for errors.
//Sweep phase of garbage collection: The garbage collector identifies and frees memory occupied by objects that are no longer reachable from the root set of references. This helps in reclaiming memory and preventing memory leaks.

const number = 42; //Allocated in the memory heap
const string = 'Hello, world!'; //Allocated in the memory heap
const human = { name: 'Alice', age: 30 }; //Allocated in the memory heap

human = 5; //Reassigning the human variable to a primitive value, the original object may be garbage collected if no other references exist
