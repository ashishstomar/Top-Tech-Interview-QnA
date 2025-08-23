/*
   🔥 JavaScript `this` Binding Cheat Sheet with Examples

   There are 5 main rules of `this` in JavaScript:
   1. Default Binding (global or undefined in strict mode)
   2. Implicit Binding (object method call)
   3. Explicit Binding (call, apply, bind)
   4. new Binding (constructor functions / classes)
   5. Arrow Functions (lexical binding)

   We'll cover them one by one 👇
*/

// 1️⃣ Default Binding
function defaultBinding() {
  console.log("Default Binding:", this);
  // In non-strict mode → global object (window in browser, global in Node).
  // In strict mode → undefined.
}
defaultBinding(); // "this" → global (or undefined in strict mode)

// 2️⃣ Implicit Binding
const obj = {
  name: "JavaScript",
  sayName: function () {
    console.log("Implicit Binding:", this.name);
  },
};
obj.sayName(); // "this" → obj, Output: JavaScript

// ⚠️ Loss of Implicit Binding
const say = obj.sayName;
say(); // "this" falls back to default binding (global/undefined)

// 3️⃣ Explicit Binding
function greet(msg) {
  console.log(`${msg}, ${this.user}`);
}
const userObj = { user: "Alice" };

greet.call(userObj, "Hello"); // call → Hello, Alice
greet.apply(userObj, ["Hi"]); // apply → Hi, Alice
const boundFn = greet.bind(userObj, "Hey");
boundFn(); // bind → Hey, Alice

// 4️⃣ new Binding
function Person(name) {
  this.name = name;
}
const p1 = new Person("Ken");
console.log("new Binding:", p1.name);
// "this" points to the newly created object. Output: Ken

// 5️⃣ Arrow Function (Lexical Binding)
const arrowObj = {
  val: 42,
  regularFn: function () {
    const arrowFn = () => {
      console.log("Arrow Function Binding:", this.val);
      // "this" comes from enclosing scope → here it's arrowObj
    };
    arrowFn();
  },
};
arrowObj.regularFn(); // Output: 42

// ⚠️ Arrow functions ignore explicit binding
const weird = () => console.log("Arrow ignores call:", this);
weird.call({ foo: "bar" }); // Output: Arrow ignores call: {} (global/undefined)
