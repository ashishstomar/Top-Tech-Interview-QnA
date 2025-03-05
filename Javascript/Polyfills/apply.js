Function.prototype.myapply = function (obj = {}, args = []) {
  // Ensure 'this' is a valid function
  if (typeof this !== "function") {
    throw new TypeError("myapply must be called on a function");
  }

  // If no context (obj) is provided, default to the global object (globalThis in modern environments)
  obj = obj || globalThis;

  // Generate a unique random property name to avoid overwriting existing properties
  let randomProp = Symbol("myapply"); // Using Symbol ensures uniqueness

  // Attach the function to the object
  obj[randomProp] = this;

  // Execute the function with the provided arguments
  let result = obj[randomProp](...args);

  // Clean up the property from the object
  delete obj[randomProp];

  return result;
};

//usage example
function greet(name) {
  return `Hello, ${name}!`;
}

const obj = {};
const result = greet.myapply(obj, ["John"]);
console.log(result); // Output: Hello, John!
