/*
  ✅ Problem Statement:
  Write a function to check whether a given number is a power of two.

  ➤ A number n is a power of two if there exists an integer x such that:
      n = 2^x

  ➤ Examples:
     - isPowerOfTwo(1) → true     // 2^0
     - isPowerOfTwo(2) → true     // 2^1
     - isPowerOfTwo(16) → true    // 2^4
     - isPowerOfTwo(18) → false   // Not a power of two
     - isPowerOfTwo(0) → false    // Invalid, zero is not a power of two

  ✅ Optimal Approach:
  Use bitwise AND operation:
    ➤ A number is a power of two if it has only one bit set in binary.
    ➤ For example:
         - 16 → 10000
         - 15 → 01111
         - 16 & 15 = 00000 → If result is 0, then it's a power of two
    ➤ Formula: (n & (n - 1)) === 0
*/

function isPowerOfTwo(n) {
  // Negative numbers or zero can't be powers of two
  if (n <= 0) return false;

  // Bitwise check: true if only one bit is set in binary representation
  return (n & (n - 1)) === 0;
}

// ✅ Test Cases
console.log(isPowerOfTwo(1)); // true → 2^0
console.log(isPowerOfTwo(2)); // true → 2^1
console.log(isPowerOfTwo(16)); // true → 2^4
console.log(isPowerOfTwo(18)); // false
console.log(isPowerOfTwo(0)); // false

/*
  🧠 Time Complexity: O(1)
     - Only a few bitwise operations regardless of input size.

  💾 Space Complexity: O(1)
     - No extra space used.
*/
