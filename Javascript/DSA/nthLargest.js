/*
🔹 Problem Statement:
Given an unsorted array and an integer n, find the n-th largest element in the array.

📌 Example:
Input:
  arr = [3, 1, 5, 6, 2, 9]
  n = 3

Output:
  5  // (3rd largest is 5)

🧠 Approach:
1. Sort the array in descending order.
2. Return the (n-1)th element.

🕒 Time Complexity: O(n log n) due to sorting.
🧠 Space Complexity: O(1) if sorting in-place.
*/

function nthLargest(arr, n) {
  if (n > arr.length || n < 1) return null; // Handle invalid n

  const sorted = [...new Set(arr)].sort((a, b) => b - a); // Remove duplicates, sort descending

  return sorted[n - 1]; // Return the nth largest (1-based index)
}

// 🔍 Example usage:
const array = [3, 1, 5, 6, 2, 9];
const n = 3;
console.log(nthLargest(array, n)); // Output: 5
