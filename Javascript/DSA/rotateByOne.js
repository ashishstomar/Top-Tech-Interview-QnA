//Left rotate the arrray by one place

var rotateByOne = function (arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
};

const arr = [1, 2, 4, 6, 8, 9];

console.log(rotateByOne(arr));

/* 
Time : O(n)
Space: O(1) or O(n)
The extra space that I'm using is O(1) but
in oorder to solve this problem I'm using this array
so you have to take space into consideration for this
algorithm particularly, so thereby O(n) is used.
*/
