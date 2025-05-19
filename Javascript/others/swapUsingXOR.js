// 🔁 Problem: Swap two variables without using a third (temp) variable using XOR

let x = 7;
let y = 12;

console.log("Before Swap: x =", x, ", y =", y);

// Swap using XOR
x = x ^ y; // x now holds result of x XOR y
y = x ^ y; // y becomes original x
x = x ^ y; // x becomes original y

console.log("After Swap: x =", x, ", y =", y);

// ✅ Output:
// Before Swap: x = 7 , y = 12
// After Swap: x = 12 , y = 7
