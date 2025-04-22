// Swaps two elements in an array
function swap(array, firstIndex, secondIndex) {
  // Only swap if indices are different
  if (firstIndex !== secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
  }
}

// Partition function to place pivot element in its correct sorted position
function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
  let swapIndex = pivotIndex;

  // Iterate over the subarray and move elements smaller than the pivot
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }

  // Place pivot element in its correct position
  swap(array, pivotIndex, swapIndex);

  // Return the index of the pivot element after partition
  return swapIndex;
}

// Main QuickSort function using recursion
function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    // Partition the array and get the pivot index
    let pivotIndex = pivot(array, left, right);

    // Recursively sort elements to the left and right of pivot
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
}

// Test input array
let myUnsortedArray = [5, 1, 6, 2, 4, 3, 7];

// Call QuickSort
quickSort(myUnsortedArray);

// Output the sorted array
console.log(myUnsortedArray); // Output: [1, 2, 3, 4, 5, 6, 7]

/*
Output:
[1, 2, 3, 4, 5, 6, 7]

Time Complexity:
- Best Case: O(n log n) – occurs when pivot divides array into nearly equal halves
- Average Case: O(n log n)
- Worst Case: O(n^2) – occurs when pivot is always the smallest or largest element (e.g., already sorted arrays without optimization)

Space Complexity:
- O(log n) due to recursive call stack (in-place sorting)
*/
