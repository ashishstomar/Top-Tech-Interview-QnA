/*
  ✅ Kadane's Algorithm: Find the maximum subarray sum in linear time

  Step-by-step:
  - Initialize two variables: maxSoFar and currentMax
  - Iterate through the array, updating currentMax at each step
  - If currentMax becomes larger than maxSoFar, update maxSoFar
*/

function maxSubArray(nums) {
  // Initialize both variables with the first element
  let maxSoFar = nums[0];
  let currentMax = nums[0];

  // Loop through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // Either extend the previous subarray or start a new one
    currentMax = Math.max(nums[i], currentMax + nums[i]);

    // Update the global max if needed
    maxSoFar = Math.max(maxSoFar, currentMax);
  }

  return maxSoFar;
}

// ✅ Test Case
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6

/*
  ⏱ Time Complexity: O(n)
  💾 Space Complexity: O(1) — constant space
*/
