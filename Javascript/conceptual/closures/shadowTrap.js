function shadowTrap() {
  let x = 5;

  return {
    getX: () => x,
    setX: (val) => {
      x = val;
    },
    incrementLater: () => {
      let x = 100;
      setTimeout(() => {
        x++;
        console.log("Inside timeout:", x);
      }, 0);
    },
  };
}

const obj = shadowTrap();

console.log(obj.getX()); // 5
obj.setX(42);
console.log(obj.getX()); // 42

obj.incrementLater();

setTimeout(() => {
  console.log("After timeout:", obj.getX()); // 42
}, 10);

/*
Expected Output:
5
42
Inside timeout: 101
After timeout: 42

Explanation:
- `getX` and `setX` close over the outer `x` (initially 5).
- `incrementLater` declares a new `x = 100` inside its own scope, shadowing the outer `x`.
- The arrow function inside `setTimeout` closes over the shadowed `x`, not the outer one.
- So `Inside timeout` modifies only the inner `x`, leaving the outer `x` unchanged.
*/
