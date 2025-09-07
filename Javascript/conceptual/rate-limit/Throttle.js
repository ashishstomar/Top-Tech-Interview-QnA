/*
📌 Problem:
Implement a function `throttle(fn, limit)` that returns a new function
which allows calling `fn` only once every `limit` milliseconds.

-------------------------------------------------
🔹 Example:
const limitedLog = throttle(console.log, 1000);
limitedLog("Hello"); // executes immediately
limitedLog("World"); // ignored if called within 1s
After 1s → next call works again.

-------------------------------------------------
🔹 Complexity:
- Time: O(1) (just comparisons + function call)
- Space: O(1) (store last execution timestamp)
*/

function throttle(fn, limit) {
  let lastExecuted = 0; // closure variable

  return function (...args) {
    const now = Date.now();

    if (now - lastExecuted >= limit) {
      lastExecuted = now;
      fn.apply(this, args);
    }
    // else ignored
  };
}

// ✅ Example Usage
const limitedLog = throttle((msg) => console.log(msg, Date.now()), 1000);

limitedLog("First"); // executes immediately
setTimeout(() => limitedLog("Second"), 500); // ignored (too soon)
setTimeout(() => limitedLog("Third"), 1500); // executes (after 1s window)
