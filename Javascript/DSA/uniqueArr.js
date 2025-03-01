// First Method using Set

var uniqueArr = function (arr) {
  const unique = Array.from(new Set(arr));
  return unique;
};

console.log(uniqueArr([1, 3, 4, 5, 2, 3, 4, 5, 6, 7, 5, 4]));

// Second Method using object and for loop
var uniqueArr = function (arr) {
  const obj = {};
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
      unique.push(arr[i]);
    }
  }
  return unique;
};

console.log(uniqueArr([1, 3, 4, 5, 2, 3, 4, 5, 6, 7, 5, 4]));
