/**
 * Debounce: Executes fn only if delay ms have passed
 * since the last call.
 */
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer); // reset the timer on every call
    timer = setTimeout(() => {
      fn.apply(this, args); // run after delay
    }, delay);
  };
}

// Usage example:
const search = debounce((query) => {
  console.log("Searching for:", query);
}, 1000);

search("h"); // ignored
search("he"); // ignored
search("hel"); // ignored
search("hell"); // ignored
search("hello"); // ✅ after 1s of no more calls → prints "Searching for: hello"
