/*
  ✅ Move Zeroes to End (In-place)

  Approach:
  - Use a pointer `pos` to track the next position to place a non-zero element.
  - First pass: Move all non-zero elements to the front.
  - Second pass: Fill the remaining positions with 0s.

  Constraints:
  - Do not use extra space for another array.
*/

function moveZeroes(nums) {
  let pos = 0; // Pointer to place the next non-zero element

  // First pass: Shift all non-zero elements forward
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  // Second pass: Fill the rest with 0s
  while (pos < nums.length) {
    nums[pos] = 0;
    pos++;
  }
}

// ✅ Test
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]

/*
  ⏱ Time Complexity: O(n)
  💾 Space Complexity: O(1) – in-place
*/
