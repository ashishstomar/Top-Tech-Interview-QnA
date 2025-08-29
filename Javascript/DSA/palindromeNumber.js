/*
📌 Problem:
Given an integer `n`, determine if it is a palindrome.
A palindrome number reads the same backward as forward.

-------------------------------------------------
🔹 Example:
- Input: 121  → true  (same forward and backward)
- Input: -121 → false (negative sign makes it different)
- Input: 10   → false (01 != 10)

-------------------------------------------------
🔹 Approaches:
1. Convert to string and reverse → Easy but uses extra space.
2. Use math (reverse half of the number) → Optimized.

-------------------------------------------------
🔹 Complexity:
- Time: O(log10(n)) because we process digits.
- Space: O(1) for numeric solution (no extra array/string).

*/

// ✅ Approach 1: String method
function isPalindromeString(num) {
  if (num < 0) return false; // negative numbers are not palindrome
  const str = num.toString();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// ✅ Approach 2: Math method (Optimized, no string)
function isPalindromeNumber(num) {
  if (num < 0 || (num % 10 === 0 && num !== 0)) return false; // negatives & multiples of 10 except 0
  let reversedHalf = 0;

  while (num > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  // Check for even and odd length numbers
  return num === reversedHalf || num === Math.floor(reversedHalf / 10);
}

// 🔍 Example usage
console.log(isPalindromeString(121)); // true
console.log(isPalindromeString(-121)); // false
console.log(isPalindromeNumber(1221)); // true
console.log(isPalindromeNumber(123)); // false
