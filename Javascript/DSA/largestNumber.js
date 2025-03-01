//Write a function to find the largest number in an array.

var largestNumber = function (nums) {
  largest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (largest < nums[i]) {
      largest = nums[i];
    }
  }
  return largest;
};

console.log(largestNumber([1, 234, 25435, 2452, 111, 3, 4, 56522]));
