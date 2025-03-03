/*
  Problem Statement:
  Given an array of integers `nums` and an integer `target`, 
  return the indices of the two numbers that add up to the target.
  Assume that there is exactly one solution, and the same element 
  cannot be used twice.

  Example:
  Input: nums = [2, 3, 4, 5], target = 7
  Output: [2, 1]  // nums[2] + nums[1] = 4 + 3 = 7
*/

// Brute Force using nested loop : Function to find indices of two numbers that add up to the target
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] + nums[i] === target) {
        return [i, j]; // Return the indices of the two numbers
      }
    }
  }
};

// Example usage
console.log(twoSum([2, 3, 4, 5], 7)); // Output: [2, 1]

/*
  Time Complexity: O(n²) - Due to the nested loop, each pair of elements is checked.
  Space Complexity: O(1) - No extra space is used apart from variables.
*/
