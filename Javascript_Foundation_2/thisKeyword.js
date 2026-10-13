// ===== `this` Keyword Examples =====

// 1. Global scope: `this` refers to the global object (window in browsers)
console.log(this); // window (or global in Node)

// 2. Implicit binding: `this` is the object before the dot
const person = {
  name: 'Karen',
  age: 40,
  hi() {
    console.log('hi ' + this.name);
  },
};
person.hi(); // hi Karen

// 3. `this` inside a regular function (non-strict mode -> global object)
function sing() {
  return 'lalala ' + this.name;
}

// 4. Explicit binding: call, apply, bind
const person2 = { name: 'Sunny' };

console.log(sing.call(person2)); // lalala Sunny
console.log(sing.apply(person2)); // lalala Sunny

const boundSing = sing.bind(person2);
console.log(boundSing()); // lalala Sunny

// 5. `new` binding: `this` refers to the newly created object
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const bob = new Person('Bob', 25);
console.log(bob.name); // Bob

// 6. Arrow functions: `this` is lexically scoped (inherits from surroundings)
const obj = {
  name: 'Billy',
  sayHi: function () {
    setTimeout(() => {
      // Arrow function keeps `this` from sayHi
      console.log('hi ' + this.name);
    }, 1000);
  },
};
obj.sayHi(); // hi Billy (after 1s)

// 7. Losing `this` when detaching a method
const person3 = {
  name: 'Karen',
  hi() {
    console.log('hi ' + this.name);
  },
};
const detached = person3.hi;
detached(); // hi undefined (`this` is now the global object / undefined)

// 8. Everything is an object: functions too
function importantPerson() {
  console.log(this.name + '!');
}
const name = 'Sunny';
const obj1 = { name: 'Cassy', importantPerson: importantPerson };
const obj2 = { name: 'Jacob', importantPerson: importantPerson };

obj1.importantPerson(); // Cassy!
obj2.importantPerson(); // Jacob!

//call() apply() bind() examples - Interview question: How to control `this` context in JavaScript?
console.log(importantPerson.call(obj1)); // Cassy!
console.log(importantPerson.apply(obj2)); // Jacob!
const boundImportantPerson = importantPerson.bind(obj1);
console.log(boundImportantPerson()); // Cassy!
