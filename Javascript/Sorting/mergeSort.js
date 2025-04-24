// Merge Sort function using divide and conquer
const mergeSort = (array) => {
  // Base case: a single element is already sorted
  if (array.length <= 1) return array;

  // Split array into two halves
  let midIndex = Math.floor(array.length / 2);
  let left = array.slice(0, midIndex);
  let right = array.slice(midIndex);

  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right));
};

// Merges two sorted arrays into one sorted array
function merge(left, right) {
  let result = [];

  // Compare and push the smallest element from either left or right
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift()); // Removes from front of 'left'
    } else {
      result.push(right.shift()); // Removes from front of 'right'
    }
  }

  // Append any remaining elements from either left or right
  return [...result, ...left, ...right];
}

// Test input array
let unsortedArray = [9, 2, 7, 10, 4, 2, 1];

// Call mergeSort and output the result
console.log(mergeSort(unsortedArray)); // Output: [1, 2, 2, 4, 7, 9, 10]

/*
Output:
[1, 1, 2, 3, 6, 8, 10]

Time Complexity:
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n log n) — consistently efficient

Space Complexity:
- O(n) due to use of extra arrays during the merging process (not in-place)

Note:
- Although `shift()` is convenient, it's O(n) in arrays because it reindexes. 
  For better performance in larger datasets, consider using indices instead of shift().
*/
