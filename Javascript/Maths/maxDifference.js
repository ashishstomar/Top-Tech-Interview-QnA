/*
  ✅ Problem Statement:
  Given an array, find the maximum difference between two elements such that
  the larger element appears after the smaller element in the array.

  ➤ Example:
    Input:  [2, 3, 10, 6, 4, 8, 1]
    Output: 8
    Explanation: The maximum difference is between 10 and 2.

    Input:  [7, 9, 5, 6, 3, 2]
    Output: 2
    Explanation: The maximum difference is between 9 and 7.
*/

function maxDifference(arr) {
  if (arr.length < 2) return 0; // No pairs available

  let minElement = arr[0];
  let maxDiff = arr[1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Update maxDiff if current difference is greater
    if (arr[i] - minElement > maxDiff) {
      maxDiff = arr[i] - minElement;
    }

    // Update minElement if current element is smaller
    if (arr[i] < minElement) {
      minElement = arr[i];
    }
  }

  return maxDiff;
}

// ✅ Test Cases
console.log(maxDifference([2, 3, 10, 6, 4, 8, 1])); // Output: 8
console.log(maxDifference([7, 9, 5, 6, 3, 2])); // Output: 2
console.log(maxDifference([10, 8, 7, 6])); // Output: -1 (decreasing array)

/*
  🧠 Time Complexity: O(n)
     - Single pass through the array.

  💾 Space Complexity: O(1)
     - Constant extra space.
*/
