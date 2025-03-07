// Description: Implements a curried function to sum multiple numbers.

const sum = (a) => {
  return (b) => {
    // If b is provided, keep accumulating the sum
    if (b !== undefined) {
      return sum(a + b); // Recursive call with updated sum
    }
    return a; // If no more arguments, return final sum
  };
};

// Example usage
console.log(sum(1)(2)(3)(4)()); // Output: 10
