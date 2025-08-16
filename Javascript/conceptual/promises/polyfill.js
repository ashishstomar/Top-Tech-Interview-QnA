/*
  ✅ Polyfills for Promise utilities:
  
  1. Promise.myAll(promises)
     - Resolves when *all* promises resolve
     - Rejects immediately if *any* reject
     
  2. Promise.myRace(promises)
     - Settles (resolve or reject) as soon as the *first* promise settles
     
  3. Promise.myAllSettled(promises)
     - Resolves after *all* settle, never rejects
     - Returns array of {status: "fulfilled", value} or {status: "rejected", reason}
     
  4. Promise.myAny(promises)
     - Resolves as soon as *one* fulfills
     - Rejects if *all* reject (AggregateError)

  📦 Complexity:
    Time  → O(n) for all cases
    Space → O(n) to hold results/errors
*/

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises))
      return reject(new TypeError("Argument must be iterable"));
    const results = [];
    let completed = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((value) => {
          results[index] = value;
          completed++;
          if (completed === promises.length) resolve(results);
        })
        .catch(reject); // short-circuits on first reject
    });

    if (promises.length === 0) resolve([]); // edge case
  });
};

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((p) => Promise.resolve(p).then(resolve, reject));
  });
};

Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
    const results = [];
    let completed = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          completed++;
          if (completed === promises.length) resolve(results);
        });
    });

    if (promises.length === 0) resolve([]);
  });
};

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let rejectedCount = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then(resolve)
        .catch((err) => {
          errors[index] = err;
          rejectedCount++;
          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });

    if (promises.length === 0) {
      reject(new AggregateError([], "No promises passed"));
    }
  });
};

/* ------------------- Demo ------------------- */
const p1 = Promise.resolve(10);
const p2 = new Promise((res) => setTimeout(() => res(20), 100));
const p3 = Promise.reject("Error");

/* myAll */
Promise.myAll([p1, p2])
  .then(console.log) // [10, 20]
  .catch(console.error);

/* myRace */
Promise.myRace([p1, p2]).then(console.log); // 10

/* myAllSettled */
Promise.myAllSettled([p1, p3]).then(console.log);
// [ {status: "fulfilled", value: 10}, {status: "rejected", reason: "Error"} ]

/* myAny */
Promise.myAny([p3, p2])
  .then(console.log) // 20
  .catch(console.error);
