/*
📌 Problem: Trapping Rainwater
--------------------------------
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.

Example:
---------
Input:  [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Visual Explanation:
   #
 #~##~#
 #~~###
 ########
(6 units of water are trapped)

--------------------------------
🧠 Approaches:

1️⃣ Brute Force:
   - For every index, find the max height on the left and max height on the right.
   - Water trapped = min(leftMax, rightMax) - height[i].
   - Time Complexity: O(n^2), Space: O(1).

2️⃣ Optimized with Prefix Arrays:
   - Precompute leftMax[i] and rightMax[i] arrays.
   - Water trapped = min(leftMax[i], rightMax[i]) - height[i].
   - Time Complexity: O(n), Space: O(n).

3️⃣ Optimal Two Pointer Approach (Most Asked in Interviews ✅):
   - Use two pointers (left, right) and track leftMax, rightMax.
   - Always move the pointer with smaller height, because trapped water depends on the smaller side.
   - Time Complexity: O(n), Space: O(1).

--------------------------------
✅ Best Solution: Two Pointer
*/

function trap(height) {
  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      // If left height is smaller
      if (height[left] >= leftMax) {
        leftMax = height[left]; // update left max
      } else {
        water += leftMax - height[left]; // water trapped
      }
      left++;
    } else {
      // If right height is smaller
      if (height[right] >= rightMax) {
        rightMax = height[right]; // update right max
      } else {
        water += rightMax - height[right]; // water trapped
      }
      right--;
    }
  }
  return water;
}

// 🔍 Example Run
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
