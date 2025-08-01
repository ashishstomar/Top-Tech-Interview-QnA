/*
Closures
A closure is the combination of a function bundled together (enclosed) with references 
to its surrounding state (the lexical environment). In other words, 
a closure gives a function access to its outer scope. In JavaScript, 
closures are created every time a function is created, at function creation time.

*/

// ✅ Closure Example: Preserve state between function calls

function outer() {
  let counter = 0; // 🔹 Private variable

  return function inner() {
    counter++; // 🔹 Increment private counter
    console.log(counter); // 🔹 Log current value
  };
}

const count = outer(); // 🔸 `count` now holds the `inner` function with access to `counter`
count(); // 1 ✅
count(); // 2 ✅

/*
🔹 JavaScript Closures: How Variables Like `counter` Are Remembered 🔹

🧠 What's Going On Under the Hood?

When you define a function inside another function in JavaScript and return it, 
the inner function retains access to the variables of the outer function 
**even after the outer function has finished executing**.

This is made possible through something called a **closure**.


📦 So What Actually Happens ?

1. When `outer()` is invoked:
   - JavaScript creates a new **Lexical Environment** (a special internal object)
     that stores the variable `counter`.

2. When `inner()` is returned:
   - It carries a hidden reference to this Lexical Environment (this is the closure).

3. The variable `counter` is kept in memory because:
   - The returned function still uses it.
   - The Lexical Environment is moved to the **heap** (long-term memory),
     not discarded like regular local variables.

4. Each time `outer()` is called:
   - A **new Lexical Environment** is created.
   - So multiple calls to `outer()` return closures with their own private `counter`.

🔍 Why It’s Not Garbage Collected:
Because the inner function still references the variable,
the JavaScript engine does **not** garbage collect the outer environment.

🔧 Summary Table:

| Concept                   | Description                                         |
|--------------------------|-----------------------------------------------------|
| Closure                  | Function + its captured Lexical Environment         |
| Lexical Environment      | Stores local variables for a function               |
| Heap                     | Where variables are kept when still referenced      |
| Internal `[[Environment]]`| Hidden link to the outer function’s variables      |

🔎 Fun Tip:
Use `console.dir(count)` in Chrome DevTools to inspect the closure!
It will show the variables closed over by the returned function.

✨ Conclusion:
Closures allow inner functions to "remember" the environment in which they were created.
This is why JavaScript can remember the value of `counter` across multiple calls.

*/
