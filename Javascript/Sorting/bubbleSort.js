var bubbleSort = function (arr) {
  let swapped;
  do {
    for (let i = 0; i < arr.length - 1; i++) {
      swapped = false;
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

const arr = ["h", "e", "l", "o"];
bubbleSort(arr);
console.log(arr);

//Big-O = O(n^2)
