//Method-1

const users = [
  { firstName: "dennis", lastName: "ritchie", age: 70 },
  { firstName: "ken", lastName: "thompson", age: 82 },
  { firstName: "richard", lastName: "stallman", age: 70 },
  { firstName: "linus", lastName: "torvalds", age: 55 },
];

// ✅ Count how many users are there for each unique age
const result = users.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = 1; // 🆕 First occurrence of this age
  } else {
    acc[curr.age]++; // ➕ Increment count for this age
  }
  return acc; // 🔄 Accumulate results
}, {});

console.log(result);
// Output: { '55': 1, '70': 2, '82': 1 }

//Method-2 (Optimized)

const users2 = [
  { firstName: "dennis", lastName: "ritchie", age: 70 },
  { firstName: "ken", lastName: "thompson", age: 82 },
  { firstName: "richard", lastName: "stallman", age: 70 },
  { firstName: "linus", lastName: "torvalds", age: 55 },
];

//  Count how many users exist for each unique age
const ageCount = users2.reduce((acc, { age }) => {
  //  If age key already exists, increment it, otherwise initialize with 1
  acc[age] = (acc[age] || 0) + 1;
  return acc; //  Return the accumulator for the next iteration
}, {});

console.log(ageCount);
// Output: { '55': 1, '70': 2, '82': 1 }
