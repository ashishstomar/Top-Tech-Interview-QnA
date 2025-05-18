/**
 * Problem: Check for Armstrong Number
 *
 * A number is called an Armstrong number if the sum of its own digits,
 * each raised to the power of the number of digits, equals the number itself.
 *
 * Example:
 *   153  => 1^3 + 5^3 + 3^3 = 153  => true
 *   9474 => 9^4 + 4^4 + 7^4 + 4^4 = 9474 => true
 *   9475 => 9^4 + 4^4 + 7^4 + 5^4 ≠ 9475 => false
 *
 * Write a function that checks whether a given number is an Armstrong number.
 */

function isArmstrongNumber(n) {
  let original = n;
  let numDigits = 0;
  let temp = n;

  // Count the number of digits
  while (temp > 0) {
    temp = Math.floor(temp / 10);
    numDigits++;
  }

  let sum = 0;
  temp = n;

  // Sum of each digit raised to the power of numDigits
  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, numDigits);
    temp = Math.floor(temp / 10);
  }

  return sum === original;
}

// Test cases
console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(9474)); // true
console.log(isArmstrongNumber(9475)); // false
