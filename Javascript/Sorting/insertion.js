// Define a function called insertionSort that takes an array as input

function insertionSort(arr) {
  // Get the length of the array
  const len = arr.length;

  // Start from the second element and iterate through the array
  for (let i = 1; i < len; i++) {
    // Store the current element to be compared
    const key = arr[i];
    // Initialize j to the index before i
    let j = i - 1;

    // Shift elements of the sorted portion of the array to the right
    // if they are greater than the key
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    // Place the key in its correct position
    arr[j + 1] = key;
  }

  // Return the sorted array
  return arr;
}

// Call the insertionSort function with a sample array and print the result
console.log(insertionSort([3, 6, 8, 10, 1, 2, 1]));

// Output:
// [1, 1, 2, 3, 6, 8, 10]
// The function sorts the input array in ascending order using insertion sort
