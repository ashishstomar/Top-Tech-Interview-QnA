/*
  ✅ Problem Statement:
  Given an array of size n, find the majority element.
  The majority element is the element that appears more than ⌊n / 2⌋ times.

  ➤ Assumptions:
    - A majority element always exists in the array.

  ➤ Example:
    Input:  [3, 2, 3]
    Output: 3

    Input:  [2, 2, 1, 1, 1, 2, 2]
    Output: 2

  ✅ Approach: Boyer-Moore Voting Algorithm
    - Use a counter to cancel out different elements.
    - The majority element will remain in the end if it exists.
*/

function findMajorityElement(nums) {
  let count = 0;
  let candidate = null;

  // Step 1: Find a candidate
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Step 2: Verify if the candidate is actually a majority (optional if assumption guarantees existence)
  count = 0;
  for (let num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  return count > Math.floor(nums.length / 2) ? candidate : -1;
}

// ✅ Test Cases
console.log(findMajorityElement([3, 2, 3])); // Output: 3
console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(findMajorityElement([1, 2, 3, 4])); // Output: -1 (no majority)

/*
  🧠 Time Complexity: O(n)
     - Single pass to find candidate, another to confirm.

  💾 Space Complexity: O(1)
     - Constant space.
*/
