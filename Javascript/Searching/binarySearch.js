var binarySearch = function (arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }

  return "not found";
};

const arr = [2, 5, 34, 6, 8, 2, 5, 9, 6];
console.log(binarySearch(arr, 374));
