// Function to calculate sum of digits of a number
function sumOfDigitsOfNumber(n) {
  let sum = 0;
  let remainder;

  while (n > 0) {
    remainder = n % 10; // Get last digit
    sum += remainder; // Add to sum
    n = Math.floor(n / 10); // Remove last digit
  }

  return sum;
}

console.log(sumOfDigitsOfNumber(1234)); // Output: 10
