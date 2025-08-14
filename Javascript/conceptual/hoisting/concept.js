/*************************************************************
 * HOISTING — The Complete Concept
 * Hoisting = JavaScript's behavior of moving declarations
 * to the top of their scope (before code execution).
 *
 * BUT: Only declarations are hoisted, NOT initializations.
 *************************************************************/

/*
---------------------------------------------------------------
1. VAR HOISTING (Function-scoped)
---------------------------------------------------------------
- `var` declarations are hoisted to the top of their function
  scope (or global scope if outside any function).
- The variable is initialized with `undefined` until assignment.
*/

console.log(a); // ✅ undefined (hoisted, but value not assigned yet)
var a = 10; // declaration is hoisted, assignment stays here
console.log(a); // 10

/*
Internally acts like:
var a; // hoisted
console.log(a); // undefined
a = 10;
console.log(a);
*/

/*
---------------------------------------------------------------
2. LET & CONST HOISTING (Block-scoped + Temporal Dead Zone)
---------------------------------------------------------------
- `let` and `const` are hoisted too, BUT they are not initialized.
- Accessing them before the declaration throws ReferenceError.
- This period before initialization is called the Temporal Dead Zone (TDZ).
*/

// console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // ✅ 20

// console.log(c); // ❌ ReferenceError
const c = 30;
console.log(c); // ✅ 30

/*
---------------------------------------------------------------
3. FUNCTION DECLARATION HOISTING
---------------------------------------------------------------
- Entire function declarations (name + body) are hoisted.
- Can call the function before its definition.
*/

greet(); // ✅ Works — "Hello!"
function greet() {
  console.log("Hello!");
}

/*
Internally acts like:
function greet() { console.log("Hello!"); }
greet();
*/

/*
---------------------------------------------------------------
4. FUNCTION EXPRESSION HOISTING
---------------------------------------------------------------
- Only the variable name is hoisted, NOT the function definition.
- If using var => initialized to undefined
- If using let/const => in TDZ
*/

// ❌ greet2(); // TypeError: greet2 is not a function
var greet2 = function () {
  console.log("Hi there!");
};
greet2(); // ✅ Works here

/*
Internally acts like:
var greet2; // hoisted, value = undefined
greet2(); // ❌ undefined is not a function
greet2 = function() { console.log("Hi there!"); };
*/

/*
---------------------------------------------------------------
5. CLASS HOISTING
---------------------------------------------------------------
- Class declarations are hoisted, BUT are in TDZ (like let/const).
- You cannot use them before the declaration.
*/

// const obj = new MyClass(); // ❌ ReferenceError
class MyClass {
  constructor() {
    this.name = "Example";
  }
}
const obj = new MyClass(); // ✅ Works here
console.log(obj.name);

/*
---------------------------------------------------------------
6. ORDER OF HOISTING PRIORITY
---------------------------------------------------------------
- Function declarations get hoisted first (before vars).
- var declarations get hoisted next (initialized as undefined).
- let/const/class are hoisted but stay uninitialized in TDZ.
*/

hoistTest(); // ✅ Works — "Function wins!"
console.log(hoistVar); // ✅ undefined

function hoistTest() {
  console.log("Function wins!");
}
var hoistVar = "I am var";

/*
---------------------------------------------------------------
7. HOISTING INSIDE FUNCTIONS & BLOCKS
---------------------------------------------------------------
- Inside functions, var is hoisted to function scope.
- let/const are block-scoped and in TDZ until initialized.
*/

function scopeTest() {
  console.log(innerVar); // ✅ undefined
  // console.log(innerLet); // ❌ ReferenceError

  var innerVar = "var inside function";
  let innerLet = "let inside function";

  console.log(innerVar); // ✅ "var inside function"
  console.log(innerLet); // ✅ "let inside function"
}
scopeTest();

/*
---------------------------------------------------------------
8. COMMON PITFALL: var in loops
---------------------------------------------------------------
- var is function-scoped, so loop variables leak outside block.
- let keeps loop variable block-scoped.
*/

for (var i = 0; i < 3; i++) {}
console.log(i); // ✅ 3 — var leaked

for (let j = 0; j < 3; j++) {}
// console.log(j); // ❌ ReferenceError — let is block scoped
