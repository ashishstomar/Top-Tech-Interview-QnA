/**
 * ✅ Problem Statement:
 * Given a positive integer `n` (1 <= n <= 10^15), find the largest prime factor of `n`.
 *
 * Example:
 * Input: 13195
 * Output: 29
 *
 * Input: 100
 * Output: 5
 *
 * ✅ Approach:
 * 1. Divide `n` by 2 continuously until it is odd.
 * 2. Then check odd numbers from 3 up to sqrt(n) and divide `n` as long as divisible.
 * 3. If after all that `n` is still greater than 2, then `n` itself is a prime factor and the largest one.
 */

function largestPrimeFactor(n) {
  let maxPrime = -1;

  // Step 1: Remove all factors of 2
  while (n % 2 === 0) {
    maxPrime = 2;
    n = n / 2;
  }

  // Step 2: Remove odd factors from 3 upwards
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      maxPrime = i;
      n = n / i;
    }
  }

  // Step 3: If n becomes a prime number > 2
  if (n > 2) {
    maxPrime = n;
  }

  return maxPrime;
}

// 🔽 Test Cases
console.log(largestPrimeFactor(13195)); // Output: 29
console.log(largestPrimeFactor(100)); // Output: 5
console.log(largestPrimeFactor(600851475143)); // Output: 6857

/**
 * 📈 Time Complexity: O(sqrt(n))
 * - The algorithm checks divisibility up to sqrt(n), which is sufficient to find the largest prime factor.
 * - Efficient for values of n up to 10^15.

 * 🧠 Space Complexity: O(1)
 * - Only a constant number of variables are used.
 */
