/*
  ✅ Problem Statement:
  Given three integers a, b, and k, find the k-th digit from the right in a^b (a raised to the power b).
  Return the digit as an integer.

  🔸 Constraints:
  - 1 ≤ a, b ≤ 10^9
  - 1 ≤ k ≤ 15 (or within safe integer range)

  🔸 Example:
    Input: a = 5, b = 2, k = 1
    Output: 5 (since 5^2 = 25 → 1st digit from right = 5)

    Input: a = 2, b = 10, k = 3
    Output: 0 (2^10 = 1024 → 3rd digit from right = 0)

  🔸 Approach:
  - We only care about the last `k` digits of a^b.
  - Use modular exponentiation with mod = 10^k to avoid full computation.
  - Use binary exponentiation to compute (a^b % 10^k) efficiently.
  - Strip away the digits until the k-th from right is isolated.

*/

function kthDigit(a, b, k) {
  let mod = 10 ** k; // Only care about the last k digits
  let res = 1;
  let base = a % mod;

  // Binary exponentiation
  while (b > 0) {
    if (b & 1) {
      res = (res * base) % mod;
    }
    base = (base * base) % mod;
    b >>= 1; // Equivalent to b = Math.floor(b / 2)
  }

  // Remove digits to get the k-th from right
  for (let i = 1; i < k; i++) {
    res = Math.floor(res / 10);
  }

  // Return the digit
  return res % 10;
}

/* 🔽 Test Cases */
console.log(kthDigit(5, 2, 1)); // Output: 5  (5^2 = 25)
console.log(kthDigit(2, 10, 3)); // Output: 0  (2^10 = 1024)
console.log(kthDigit(3, 3, 2)); // Output: 2  (3^3 = 27)
console.log(kthDigit(7, 7, 4)); // Output: 3  (7^7 = 823543)

/*
  🔸 Time Complexity:
    - O(log b) due to binary exponentiation.

  🔸 Space Complexity:
    - O(1) constant space (no extra storage used).
*/
