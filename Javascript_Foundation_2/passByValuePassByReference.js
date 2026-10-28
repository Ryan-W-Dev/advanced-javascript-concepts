var a = 5;
var b = a; // pass by value

var obj1 = { key: 'value' };
var obj2 = obj1; // pass by reference

b = 10; // changing b does not affect a
obj2.key = 'new value'; // changing obj2 affects obj1 as well

console.log(a); // 5
console.log(b); // 10
console.log(obj1.key); // 'new value'

let obj1 = { name: 'John', password: '12345' };
let obj2 = obj1; // pass by reference

obj2.password = '67890'; // changing obj2 affects obj1 as well

console.log(obj1.password); // '67890'

var c = [1, 2, 3];
var d = c; // pass by reference

d.push(4); // changing d affects c as well

console.log(c); // [1, 2, 3, 4]

let obj = { a: 'a', b: 'b', c: 'c' };
let clone = Object.assign({}, obj);

obj.c = 5;
