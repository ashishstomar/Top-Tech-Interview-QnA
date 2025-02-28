var isDuplicate = function (nums) {
  const obj = {};
  const duplicate = [];

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] === undefined ? (obj[nums[i]] = 1) : duplicate.push(nums[i]);
  }

  return duplicate;
};

console.log(isDuplicate([1, 2, 3, 4, 5, 3, 2]));
