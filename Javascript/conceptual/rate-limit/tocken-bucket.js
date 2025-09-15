/*
📌 Problem:
Implement a Token Bucket rate limiter.
- The bucket has a capacity of "maxTokens".
- Tokens are added at a fixed "refillRate" (per second).
- Each request consumes 1 token.
- If the bucket is empty → reject/ignore the request.

-------------------------------------------------
🔹 Real-world usage:
- API Gateways (limit requests per user/IP).
- Distributed systems (throttle requests without blocking all).
- Networking (bandwidth throttling).

-------------------------------------------------
🔹 Complexity:
- Time: O(1) per request
- Space: O(1) (just store token count + timestamp)
*/

function tokenBucketRateLimiter(maxTokens, refillRatePerSec) {
  let tokens = maxTokens;
  let lastRefill = Date.now();

  return function request(fn, ...args) {
    const now = Date.now();

    // Calculate how many tokens to refill since last request
    const elapsed = (now - lastRefill) / 1000; // in seconds
    const refill = Math.floor(elapsed * refillRatePerSec);

    if (refill > 0) {
      tokens = Math.min(maxTokens, tokens + refill); // refill but not exceed max
      lastRefill = now;
    }

    if (tokens > 0) {
      tokens--; // consume one token
      fn(...args); // execute request
    } else {
      console.log("⛔ Rate limit exceeded, try later");
    }
  };
}

// ✅ Example usage:
const limitedAPI = tokenBucketRateLimiter(3, 1); // 3 requests max, refill 1/sec

// Simulate burst requests
limitedAPI(() => console.log("Request 1", Date.now()));
limitedAPI(() => console.log("Request 2", Date.now()));
limitedAPI(() => console.log("Request 3", Date.now()));
limitedAPI(() => console.log("Request 4 (should be blocked)", Date.now()));

// Wait & try again
setTimeout(() => {
  limitedAPI(() => console.log("Request 5 after refill", Date.now()));
}, 2000);
