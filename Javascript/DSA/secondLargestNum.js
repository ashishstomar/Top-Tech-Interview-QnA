/**
 * ✅ Problem Statement:
 * Given an array of integers, find the second largest unique number in the array.
 * If the second largest doesn't exist (e.g., all elements are the same or array length < 2), return null.
 *
 * Example:
 * Input: [11, 6, 20, 20, 8]
 * Output: 11
 *
 * Input: [2]
 * Output: null
 */

function secondLargest(arr) {
  if (arr.length < 2) return null; // Not enough elements to find second largest

  let first = -Infinity; // Track the largest
  let second = -Infinity; // Track the second largest

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    // Update first and second accordingly
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  // If second remains -Infinity, no valid second largest found
  return second === -Infinity ? null : second;
}

// 🔽 Test Cases
console.log(secondLargest([11, 6, 20, 20, 8])); // Output: 11
console.log(secondLargest([2])); // Output: null
console.log(secondLargest([1, 2, 3, 4, 8, 9])); // Output: 8
console.log(secondLargest([2, 2, 2])); // Output: null

/**
 * 📈 Time Complexity: O(n)
 *   - Single pass through the array to find first and second largest.
 *
 * 🧠 Space Complexity: O(1)
 *   - Only a few variables used regardless of input size.
 */
