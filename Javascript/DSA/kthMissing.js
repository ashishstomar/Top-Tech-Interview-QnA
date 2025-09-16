/**
 * 📌 Problem: Kth Missing Positive Number
 *
 * 📝 Statement:
 * Given a sorted array of positive integers `arr` and an integer `k`,
 * return the kth missing positive integer from the sequence of natural numbers.
 *
 * Example:
 * Input: arr = [2, 3, 4, 7, 11], k = 5
 * Output: 9
 * Explanation: The missing numbers are [1, 5, 6, 8, 9, 10, ...].
 *              The 5th missing is 9.
 *
 * ✅ Approach 1: Brute Force
 * - Track numbers from 1 upwards, skipping those in arr.
 * - Stop when we find the kth missing.
 * - Time: O(n + k), Space: O(1).
 *
 * ✅ Approach 2: Optimized Binary Search
 * - For each index `i`, the count of missing numbers before arr[i] is:
 *      arr[i] - (i + 1)
 *   (because ideally, the i-th index should hold i+1 if no numbers were missing).
 * - Use binary search to locate where the kth missing falls.
 * - Time: O(log n), Space: O(1).
 */

// ---------------------------------------------------
// ✅ Optimized Binary Search Implementation
// ---------------------------------------------------
function findKthPositive(arr, k) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Missing numbers before arr[mid]
    const missing = arr[mid] - (mid + 1);

    if (missing < k) {
      left = mid + 1; // we need more missing
    } else {
      right = mid - 1;
    }
  }

  // kth missing is after 'right'
  return left + k;
}

// ---------------------------------------------------
// 🔍 Example usage
// ---------------------------------------------------
console.log(findKthPositive([2, 3, 4, 7, 11], 5)); // Output: 9
console.log(findKthPositive([1, 2, 3, 4], 2)); // Output: 6
