/**
 * 📌 Sliding Window Log (Rate Limiter)
 *
 * 📝 Problem Statement:
 * Implement a rate limiter that allows at most `N` function calls
 * in the last `X` milliseconds using a log of timestamps.
 *
 * ✅ How it works:
 * 1. Maintain a **log (array)** of timestamps for all successful calls.
 * 2. On each new request:
 *    - Remove entries older than the allowed interval.
 *    - If log size < limit → allow request and add timestamp.
 *    - Else → block request.
 *
 * ⚡ Difference from Sliding Window Counter:
 * - Both track calls within a moving time window.
 * - Counter only keeps a count (approximate).
 * - Log stores actual timestamps (more precise, but uses more memory).
 *
 * 🧮 Complexity:
 * - Time: O(n) per request (filtering old timestamps).
 * - Space: O(n) in worst case (all timestamps kept).
 *
 * 📌 Real Use Cases:
 * - Small systems needing strict precision.
 * - Situations where exact timestamps matter.
 * - Educational / demonstration of rate limiting concepts.
 */

function slidingWindowLogRateLimiter(limit, interval) {
  let log = [];

  return function (fn, ...args) {
    const now = Date.now();

    // 🔹 Remove timestamps older than interval
    log = log.filter((ts) => now - ts < interval);

    if (log.length < limit) {
      // ✅ Allow execution
      log.push(now);
      fn(...args);
    } else {
      // ⛔ Block execution
      console.log("Rate limit exceeded. Try again later.");
    }
  };
}

// -----------------------------------------------
// 🔍 Usage Example
// -----------------------------------------------
const rateLimitedFn = slidingWindowLogRateLimiter(3, 5000);
// Allow max 3 calls in last 5s

function apiCall(msg) {
  console.log("API called with:", msg, "at", new Date().toLocaleTimeString());
}

// Simulate calls
rateLimitedFn(apiCall, "First"); // ✅
rateLimitedFn(apiCall, "Second"); // ✅
rateLimitedFn(apiCall, "Third"); // ✅
rateLimitedFn(apiCall, "Fourth"); // ⛔ Blocked
