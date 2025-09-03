/*
📌 Problem:
Implement a curry function that transforms a function with multiple arguments
into a sequence of functions each taking a single argument.

-------------------------------------------------
🔹 Example:
function add(a, b, c) { return a + b + c; }

curry(add)(1)(2)(3)  => 6

-------------------------------------------------
🔹 Concept:
- Currying breaks a function with `n` parameters into `n` unary functions.
- Useful for function reusability and partial application.

-------------------------------------------------
🔹 Complexity:
- Time: O(n) for n arguments (each call adds one argument until all are collected).
- Space: O(n) (arguments stored in closure).
*/

function curry(fn) {
  return function curried(...args) {
    // If enough arguments supplied → call original function
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    // Otherwise return a function expecting more args
    return function (...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    };
  };
}

// ✅ Example usage:
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6
