/**
 * 📌 Sliding Window Counter (Rate Limiter)
 *
 * 📝 Problem Statement:
 * Implement a rate limiter that allows at most `N` function calls
 * in the last `X` milliseconds. Unlike fixed windows, the sliding
 * window updates continuously and is more precise.
 *
 * ✅ How it works:
 * 1. Keep a list of timestamps of successful calls.
 * 2. On each new call:
 *    - Remove timestamps older than the allowed interval.
 *    - If list length < limit → allow and add new timestamp.
 *    - Else → reject.
 *
 * ⚡ Example:
 * - Limit: 3 calls per 5 seconds
 * - Calls at t=1s, 2s, 4s → all succeed
 * - Another call at t=4.5s → rejected (already 3 calls in last 5s)
 *
 * 🧮 Complexity:
 * - Time: O(n) per call (due to filtering), but n ≤ limit in practice.
 * - Space: O(limit).
 *
 * 📌 Real Use Cases:
 * - API gateways (prevent abuse).
 * - Chat systems (prevent spamming).
 * - Login attempts throttling.
 */

function slidingWindowRateLimiter(limit, interval) {
  let timestamps = [];

  return function (fn, ...args) {
    const now = Date.now();

    // 🔹 Remove timestamps older than interval
    timestamps = timestamps.filter((ts) => now - ts < interval);

    if (timestamps.length < limit) {
      // ✅ Allow execution
      timestamps.push(now);
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
const rateLimitedFn = slidingWindowRateLimiter(3, 5000);
// Allow max 3 calls in last 5s

function apiCall(msg) {
  console.log("API called with:", msg, "at", new Date().toLocaleTimeString());
}

// Simulate calls
rateLimitedFn(apiCall, "First"); // ✅
rateLimitedFn(apiCall, "Second"); // ✅
rateLimitedFn(apiCall, "Third"); // ✅
rateLimitedFn(apiCall, "Fourth"); // ⛔ Blocked
