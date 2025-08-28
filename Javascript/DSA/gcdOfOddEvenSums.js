/*
📌 Problem:
Given a positive integer n, calculate:
1. Sum of even numbers up to n
2. Sum of odd numbers up to n
Then return the GCD of these two sums.

-------------------------------------------------
🔹 Formulae:
- Sum of first n even numbers = n * n
- Sum of first n odd numbers  = n * (n + 1)

Example:
n = 3
Even sum = 3^2 = 9   (2 + 4 + 6 = 12 ❌ careful, formula is valid for first n evens, not evens ≤ n)
Odd sum  = 3 * 4 = 12
GCD(9, 12) = 3

-------------------------------------------------
🔹 GCD Calculation:
Using Euclidean Algorithm:
- gcd(a, b) = gcd(b, a % b)
- Stops when b == 0

-------------------------------------------------
🔹 Complexity:
- Time: O(log(min(a, b))) for GCD
- Space: O(1)

*/

var gcdOfOddEvenSums = function (n) {
  let sumEven = n * n; // sum of first n even numbers
  let sumOdd = n * (n + 1); // sum of first n odd numbers

  return gcd(sumOdd, sumEven);

  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
};

// ✅ Example:
console.log(gcdOfOddEvenSums(3)); // Output: 3
console.log(gcdOfOddEvenSums(5)); // Output: 5
