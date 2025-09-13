/**
 * 📌 Fixed Window Counter (Rate Limiter)
 *
 * 📝 Problem Statement:
 * Implement a rate limiter that allows at most `N` function calls
 * within a **fixed window of X milliseconds**.
 *
 * ✅ How it works:
 * 1. Divide time into fixed windows (e.g., every 5 seconds).
 * 2. Keep a counter of requests per window.
 * 3. On each new request:
 *    - If current time is still in the same window:
 *         - If counter < limit → allow and increment counter.
 *         - Else → block request.
 *    - If current time has moved to next window:
 *         - Reset counter and allow request.
 *
 * ⚡ Drawback:
 * - **Burst problem**: Requests at the boundary of two windows
 *   may allow *2 × limit* calls in a short span.
 *   Example: If limit=3 per 5s, user can send 3 requests at 4.9s
 *   and 3 more at 5.1s → 6 calls in ~0.2s.
 *
 * 🧮 Complexity:
 * - Time: O(1) per request.
 * - Space: O(1) → only stores count and window start.
 *
 * 📌 Real Use Cases:
 * - Simple APIs where burst allowance is acceptable.
 * - Lightweight systems where performance > precision.
 */

function fixedWindowRateLimiter(limit, interval) {
  let count = 0;
  let windowStart = Date.now();

  return function (fn, ...args) {
    const now = Date.now();

    // 🔹 Check if we’re still in the same window
    if (now - windowStart < interval) {
      if (count < limit) {
        // ✅ Allow
        count++;
        fn(...args);
      } else {
        // ⛔ Block
        console.log("Rate limit exceeded. Try again later.");
      }
    } else {
      // 🔄 Reset counter for new window
      windowStart = now;
      count = 1;
      fn(...args);
    }
  };
}

// -----------------------------------------------
// 🔍 Usage Example
// -----------------------------------------------
const rateLimitedFn = fixedWindowRateLimiter(3, 5000);
// Allow max 3 calls per fixed 5s window

function apiCall(msg) {
  console.log("API called with:", msg, "at", new Date().toLocaleTimeString());
}

// Simulate calls
rateLimitedFn(apiCall, "First"); // ✅
rateLimitedFn(apiCall, "Second"); // ✅
rateLimitedFn(apiCall, "Third"); // ✅
rateLimitedFn(apiCall, "Fourth"); // ⛔ Blocked (same window)
