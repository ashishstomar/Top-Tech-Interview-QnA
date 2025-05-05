//Find Missing Number (1 to n)

//You are given an array of n - 1 unique numbers, where each number is in the range 1 to n.
// The task is to find the one missing number in the sequence.

function findMissing(arr) {
  // n is total number of elements expected, which is array length + 1
  const n = arr.length + 1;

  // Calculate expected sum of numbers from 1 to n using formula: n * (n + 1) / 2
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate actual sum of all elements in the array
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  // The difference is the missing number
  return expectedSum - actualSum;
}

console.log(findMissing([1, 2, 4, 5])); // Output: 3

/*
Time Complexity:
O(n) — because we iterate over the array once to get the sum.

📦 Space Complexity:
O(1) — constant space usage.
*/
