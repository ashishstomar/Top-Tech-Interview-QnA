/*
📌 Problem: Product of Array Except Self
------------------------------------------
Given an integer array nums, return an array answer such that:
answer[i] = product of all elements of nums except nums[i].

⚠️ Constraint:
- Do not use division.
- Must run in O(n) time.
- Space: O(1) extra space (ignoring output array).

Example:
---------
Input:  nums = [1,2,3,4]
Output: [24,12,8,6]

Explanation:
- answer[0] = 2*3*4 = 24
- answer[1] = 1*3*4 = 12
- answer[2] = 1*2*4 = 8
- answer[3] = 1*2*3 = 6

------------------------------------------
🧠 Approaches:

1️⃣ Brute Force:
   - For each index, loop through the array and multiply everything except that index.
   - Time: O(n^2), Space: O(1). ❌ Too slow.

2️⃣ Prefix & Suffix Arrays:
   - left[i] = product of nums[0..i-1]
   - right[i] = product of nums[i+1..n-1]
   - answer[i] = left[i] * right[i]
   - Time: O(n), Space: O(n).

3️⃣ Optimal Two-Pass (No Extra Arrays ✅):
   - First pass: build prefix product in result array.
   - Second pass: multiply with suffix product while traversing backwards.
   - Time: O(n), Space: O(1) (ignoring result).

------------------------------------------
✅ Best Solution: Two-Pass (Prefix & Suffix without extra arrays)
*/

function productExceptSelf(nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);

  // Pass 1: prefix product
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // Pass 2: suffix product
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

// 🔍 Example Run
console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
