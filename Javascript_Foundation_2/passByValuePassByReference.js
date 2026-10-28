var a = 5;
var b = a; // pass by value

var obj1 = { key: 'value' };
var obj2 = obj1; // pass by reference

b = 10; // changing b does not affect a
obj2.key = 'new value'; // changing obj2 affects obj1 as well

console.log(a); // 5
console.log(b); // 10
console.log(obj1.key); // 'new value'
