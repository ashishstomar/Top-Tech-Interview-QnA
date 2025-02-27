// Write a function that returns the reverse of a string

//First Method using built in methods;
var reverseString = function (str) {
  return str.split("").reverse().join("");
};

console.log(reverseString("hello"));

//Second Method, Using For Loop
var reverseString = function (str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
};

console.log(reverseString("hello"));
