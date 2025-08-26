/*
📌 Problem Statement:
Implement a memoized Fibonacci function using JavaScript closures.
The function should cache previously computed results to avoid redundant computation.

🔹 Fibonacci Formula: 
fib(n) = fib(n-1) + fib(n-2), with base cases:
fib(0) = 0, fib(1) = 1

-------------------------------------------------
❌ Naive recursion complexity:
- Time: O(2^n) (exponential, recomputation)
- Space: O(n) (call stack)

✅ With Memoization:
- Time: O(n) (each value is computed once)
- Space: O(n) (cache stores results)

-------------------------------------------------
⚖️ Trade-offs (Time vs Memory):
- We save exponential time by caching, but use extra memory (cache).
- If n is very large (e.g., 10^6), memory usage becomes a problem.
- In such cases, an iterative bottom-up DP approach is preferred.
*/

function memoizedFibonacci() {
  const cache = {}; // closure cache object

  function fib(n) {
    if (n in cache) return cache[n]; // return cached result if exists

    if (n <= 1) {
      cache[n] = n; // base case
    } else {
      cache[n] = fib(n - 1) + fib(n - 2); // recursive + store result
    }

    return cache[n];
  }

  return fib;
}

/*
✅ Example Usage:
- fib(10) => 55
- fib(40) => fast due to memoization (naive recursion would be very slow)
*/

const fib = memoizedFibonacci();
console.log(fib(10)); // Output: 55
console.log(fib(40)); // Output: 102334155
