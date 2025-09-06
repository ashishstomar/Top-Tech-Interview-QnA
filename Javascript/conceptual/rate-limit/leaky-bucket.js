/*
📌 Problem:
Implement a Leaky Bucket Rate Limiter.

🔹 Concept:
- Imagine a bucket with a hole at the bottom.
- Requests are poured into the bucket (like water).
- Water leaks out at a fixed constant rate.
- If the bucket overflows → extra requests are dropped.

-------------------------------------------------
🔹 Real-world usage:
- Network traffic shaping (packets flow at a fixed rate).
- API request smoothing (avoid sudden bursts).
- Payment gateways / messaging queues.

-------------------------------------------------
🔹 Difference vs Token Bucket:
- Token Bucket: Allows bursts (if tokens are saved up).
- Leaky Bucket: Strict output rate, no bursts.

-------------------------------------------------
🔹 Complexity:
- Time: O(1) per request
- Space: O(1) (track current queue length)
*/

function leakyBucketRateLimiter(capacity, leakRatePerSec) {
  let water = 0; // current water in the bucket (pending requests)
  let lastChecked = Date.now();

  return function request(fn, ...args) {
    const now = Date.now();

    // Calculate leaked water since last check
    const elapsed = (now - lastChecked) / 1000;
    const leaked = elapsed * leakRatePerSec;
    water = Math.max(0, water - leaked); // reduce water but not below 0
    lastChecked = now;

    if (water < capacity) {
      water++; // add new request (fill bucket)
      fn(...args); // allow request
    } else {
      console.log("⛔ Request dropped! Bucket is full.");
    }
  };
}

// ✅ Example usage:
const limitedAPI = leakyBucketRateLimiter(3, 1); // capacity 3, leak 1/sec

// Simulate burst requests
limitedAPI(() => console.log("Request 1 at", Date.now()));
limitedAPI(() => console.log("Request 2 at", Date.now()));
limitedAPI(() => console.log("Request 3 at", Date.now()));
limitedAPI(() => console.log("Request 4 (should drop)", Date.now()));

// Wait a bit so bucket leaks
setTimeout(() => {
  limitedAPI(() => console.log("Request 5 after leak", Date.now()));
}, 2500);
