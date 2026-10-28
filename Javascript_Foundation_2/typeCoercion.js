if (1) {
  console.log('This will always run because 1 is truthy');
}

1 == '1'; // true due to type coercion
// type coercion occurs when comparing values of different types using ==
// it converts one of the values to the type of the other before comparison

// Example of type coercion with addition
// when using the + operator with a number and a string, the number is coerced to a string before concatenation
1 + '1'; // '11' due to type coercion

Object.is(-0, +0); // false due to type coercion not occurring with Object.is()
