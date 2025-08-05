/* Comprehensive Event Loop Demo in JavaScript
   Demonstrates: Call Stack, Microtask Queue, Callback Queue (Macrotasks), setImmediate, and process.nextTick (Node.js)
   Purpose: Show how synchronous and asynchronous tasks are processed in the event loop
   Environment: Works in Node.js for full functionality; browsers skip setImmediate and process.nextTick
  
*/

console.log("1. Script starts - Synchronous code begins");
/* Expected: Runs first, as synchronous code executes immediately on the call stack */

/* Utility function to simulate a time-consuming task */
function heavyComputation(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    /* Simulate heavy work by looping */
  }
  return `Heavy computation done after ${ms}ms`;
}

/* 1. Synchronous code - executed immediately in the call stack */
function syncFunction() {
  console.log("2. Inside syncFunction - Synchronous execution");
  /* Expected: Runs second, as part of synchronous execution */
}
syncFunction();

/* 2. setTimeout - demonstrates the callback queue (macrotask, timers phase) */
console.log("3. Setting up setTimeout (macrotask)");

setTimeout(() => {
  console.log(
    "9. setTimeout callback - Executes after microtasks (timers phase)"
  );
  /* Expected: Runs after microtasks, as setTimeout is a macrotask in the timers phase */
  /* Nested setTimeout to show queue ordering */
  setTimeout(() => {
    console.log("12. Nested setTimeout - Later macrotask");
    /* Expected: Runs later, as a new macrotask queued after the first setTimeout */
  }, 0);
}, 0);

/* 3. setImmediate - Node.js-specific, runs in the check phase (after I/O, before timers) */
if (typeof setImmediate !== "undefined") {
  console.log("4. Setting up setImmediate (Node.js macrotask)");

  setImmediate(() => {
    console.log(
      "8. setImmediate callback - Executes before setTimeout (check phase)"
    );
    /* Expected: In Node.js, runs before setTimeout but after microtasks, due to check phase priority */
  });
} else {
  console.log("4. setImmediate not available (browser environment)");
  /* Expected: In browsers, setImmediate is undefined, so this logs instead */
}

/* 4. Promise - demonstrates the microtask queue */
console.log("5. Creating Promise (microtask)");

const promise = new Promise((resolve) => {
  console.log("6. Inside Promise executor - Synchronous");
  /* Expected: Runs synchronously, as the Promise executor is immediate */
  resolve("Promise resolved!");
});

promise
  .then((result) => {
    console.log(`7. Promise then 1 - Microtask: ${result}`);
    /* Expected: Runs after synchronous code, as a microtask, before macrotasks */
    return Promise.resolve("Nested Promise result");
  })
  .then((result) => {
    console.log(`8. Promise then 2 - Microtask: ${result}`);
    /* Expected: Runs after the first .then, as microtasks are processed in order */
  });

/* 5. setInterval - demonstrates repeated macrotasks */
console.log("10. Setting up setInterval");

let intervalCount = 0;
const intervalId = setInterval(() => {
  console.log(`13. setInterval tick ${++intervalCount}`);
  /* Expected: Runs after initial macrotasks, repeating every ~100ms */
  if (intervalCount === 2) {
    clearInterval(intervalId);
    console.log("14. setInterval cleared");
    /* Expected: Runs after second tick, clearing the interval */
  }
}, 100);

/* 6. Async/Await - syntactic sugar over Promises */
async function asyncFunction() {
  console.log("11. Inside asyncFunction - Synchronous part");
  /* Expected: Runs synchronously when the function is called */
  const result = await new Promise((resolve) =>
    setTimeout(() => resolve("Async/Await result"), 50)
  );
  console.log(`15. After await - Microtask: ${result}`);
  /* Expected: Runs after the Promise resolves, as a microtask */
}
asyncFunction();

/* 7. process.nextTick - Node.js-specific, highest priority microtask */
if (typeof process !== "undefined" && process.nextTick) {
  console.log("16. Setting up process.nextTick");
  process.nextTick(() => {
    console.log("17. process.nextTick - Highest priority microtask");
    /* Expected: In Node.js, runs before other microtasks (e.g., Promises) */
  });
} else {
  console.log("16. process.nextTick not available (browser environment)");
  /* Expected: In browsers, process.nextTick is undefined, so this logs instead */
}

/* 8. Heavy computation - demonstrates blocking the call stack */
console.log("18. Starting heavy computation - Blocks the call stack");
console.log(heavyComputation(100));
/* Expected: Runs synchronously, blocking the call stack for ~100ms */

/* 9. Fetch API - real-world async example */
console.log("19. Initiating Fetch request");
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("20. Fetch resolved - Microtask:", data.title);
    /* Expected: Runs as a microtask after the fetch resolves */
  })
  .catch((error) => {
    console.log("21. Fetch error:", error);
    /* Expected: Runs only if fetch fails, as a microtask */
  });

/* 10. Event listener - demonstrates event-driven programming */
console.log("22. Setting up event listener");
const button = {
  addEventListener: (event, callback) => {
    /* Simulate a click event after 100ms */
    setTimeout(() => callback(), 100);
  },
};
button.addEventListener("click", () => {
  console.log("23. Event listener triggered - Macrotask");
  /* Expected: Runs as a macrotask after ~100ms, simulating an event */
});

/* 11. MutationObserver - demonstrates microtask-based DOM observation */
console.log("24. Setting up MutationObserver");
const observer = {
  observe: () => {
    /* Simulate DOM mutation callback */
    Promise.resolve().then(() => {
      console.log("25. MutationObserver callback - Microtask");
      /* Expected: Runs as a microtask, simulating DOM observation */
    });
  },
};
observer.observe();

console.log("26. Script ends - Synchronous code complete");
/* Expected: Runs last in synchronous execution */

/* Expected Output Order (in Node.js):
   1. Script starts - Synchronous code begins
   2. Inside syncFunction - Synchronous execution
   3. Setting up setTimeout (macrotask)
   4. Setting up setImmediate (Node.js macrotask)
   5. Creating Promise (microtask)
   6. Inside Promise executor - Synchronous
   10. Setting up setInterval
   11. Inside asyncFunction - Synchronous part
   16. Setting up process.nextTick
   18. Starting heavy computation - Blocks the call stack
   Heavy computation done after 100ms
   19. Initiating Fetch request
   22. Setting up event listener
   24. Setting up MutationObserver
   26. Script ends - Synchronous code complete
   17. process.nextTick - Highest priority microtask
   7. Promise then 1 - Microtask: Promise resolved!
   8. Promise then 2 - Microtask: Nested Promise result
   25. MutationObserver callback - Microtask
   8. setImmediate callback - Executes before setTimeout (check phase)
   9. setTimeout callback - Executes after microtasks (timers phase)
   15. After await - Microtask: Async/Await result
   20. Fetch resolved - Microtask: [title from API]
   23. Event listener triggered - Macrotask
   12. Nested setTimeout - Later macrotask
   13. setInterval tick 1
   13. setInterval tick 2
   14. setInterval cleared

   In browsers (no setImmediate or process.nextTick):
   - Line 4: "setImmediate not available (browser environment)"
   - Line 16: "process.nextTick not available (browser environment)"
   - Line 17 (process.nextTick) is skipped
   - Line 8 (setImmediate) is skipped
   - setTimeout (line 9) moves up in the order
*/
