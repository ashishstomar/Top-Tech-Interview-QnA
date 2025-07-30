// Classic Interview Problem: Closure Inside Loops

// ❌ Problematic version with `var`
for (var i = 0; i < 3; i++) {
  // setTimeout runs AFTER the loop finishes
  // All callbacks refer to the same `i`, which ends up being 3
  setTimeout(function () {
    console.log("❌ var issue:", i); // prints 3, 3, 3
  }, 1000);
}

// ✅ Fixed using IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
  (function (j) {
    // j captures current value of i
    setTimeout(function () {
      console.log("✅ IIFE fix:", j); // prints 0, 1, 2
    }, 1000);
  })(i);
}

// ✅ Preferred modern fix using `let`
// let is block-scoped — a new `i` is created for each iteration
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("✅ let fix:", i); // prints 0, 1, 2
  }, 1000);
}

// ✅ Using Array.forEach() — another modern solution
[0, 1, 2].forEach(function (i) {
  // Each callback has its own `i`
  setTimeout(function () {
    console.log("✅ forEach fix:", i); // prints 0, 1, 2
  }, 1000);
});

// ✅ Bonus: Using async/await for sequential delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runSequentially() {
  for (let i = 0; i < 3; i++) {
    await delay(1000);
    console.log("✅ async/await:", i); // prints 0, 1, 2 with 1 sec gap
  }
}
runSequentially();

/*
💡 Summary:

- The issue with `var` is that it's function-scoped — all iterations share the same variable.
- Using an IIFE or `let` gives each iteration its own copy.
- `forEach()` and async/await also naturally fix this.
- In interviews, using IIFE shows strong closure understanding.
- `let` is cleaner and preferred in modern code.

*/
