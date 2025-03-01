//Fibonacci sequence is a sequence in which each number is the sum of the two numbers that precede it.

var fibonacci = function (num) {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(4));
