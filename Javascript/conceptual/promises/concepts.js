/*************************************************************
 * PROMISES — The Complete Guide in One File
 * (from baby steps to async wizardry)
 *************************************************************/

/*
---------------------------------------------------------------
1. CREATING A PROMISE
---------------------------------------------------------------
A Promise is just an object representing a value that will 
exist in the future (fulfilled) or never exist (rejected).
*/

const basicPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Basic Promise resolved!");
    // reject("❌ Basic Promise rejected!");
  }, 500);
});

basicPromise
  .then((result) => console.log(result)) // success handler
  .catch((error) => console.error(error)) // failure handler
  .finally(() => console.log("Basic Promise finished.\n")); // always runs

/*
---------------------------------------------------------------
2. PROMISE CHAINING
---------------------------------------------------------------
Return another Promise in `.then()` to run async operations 
in sequence without callback hell.
*/

function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Alice" }), 400);
  });
}

function getPostsByUser(user) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve([`Post 1 by ${user.name}`, `Post 2 by ${user.name}`]),
      400
    );
  });
}

getUser(1)
  .then((user) => {
    console.log("Chaining: Got user:", user);
    return getPostsByUser(user);
  })
  .then((posts) => {
    console.log("Chaining: Got posts:", posts, "\n");
  })
  .catch((err) => console.error("Chaining Error:", err));

/*
---------------------------------------------------------------
3. ERROR HANDLING IN PROMISES
---------------------------------------------------------------
- Errors in `.then()` or the executor function go to `.catch()`
- Always end long chains with `.catch()` to avoid unhandled rejections
*/

Promise.resolve("Start")
  .then((val) => {
    console.log(val);
    throw new Error("Something went wrong");
  })
  .catch((err) => {
    console.error("Caught error:", err.message, "\n");
    return "Recovered value";
  })
  .then((val) => console.log("After recovery:", val, "\n"));

/*
---------------------------------------------------------------
4. PROMISE COMBINATORS
---------------------------------------------------------------
- Promise.all       => waits for all to succeed, fails fast
- Promise.race      => resolves/rejects with the first settled
- Promise.allSettled=> waits for all, never fails
- Promise.any       => resolves with first fulfilled, ignores rejects
*/

const p1 = new Promise((res) => setTimeout(() => res("P1 done"), 300));
const p2 = new Promise((res) => setTimeout(() => res("P2 done"), 200));
const p3 = new Promise((_, rej) => setTimeout(() => rej("P3 fail"), 100));

Promise.all([p1, p2])
  .then((results) => console.log("All success:", results))
  .catch((err) => console.log("All error:", err));

Promise.race([p1, p2, p3])
  .then((result) => console.log("Race winner:", result))
  .catch((err) => console.log("Race error:", err));

Promise.allSettled([p1, p2, p3]).then((results) =>
  console.log("AllSettled:", results)
);

Promise.any([p3, p2, p1]) // First fulfilled wins
  .then((result) => console.log("Any:", result))
  .catch((err) => console.log("Any failed:", err.errors));

/*
---------------------------------------------------------------
5. ASYNC / AWAIT SYNTAX
---------------------------------------------------------------
- Cleaner syntax for promises
- Use try/catch for error handling
- Allows mixing sequential and parallel work
*/

async function asyncAwaitExample() {
  try {
    const user = await getUser(2); // sequential
    const [posts, bio] = await Promise.all([
      // parallel
      getPostsByUser(user),
      new Promise((res) => setTimeout(() => res("JS Enthusiast"), 300)),
    ]);
    console.log("Async/Await Example:", { user, posts, bio }, "\n");
  } catch (err) {
    console.error("Async/Await Error:", err);
  }
}
asyncAwaitExample();

/*
---------------------------------------------------------------
6. CONCURRENCY CONTROL
---------------------------------------------------------------
Run many async tasks but limit how many run in parallel
*/

async function limitedConcurrency(tasks, limit = 2) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < tasks.length) {
      const i = index++;
      try {
        results[i] = { status: "fulfilled", value: await tasks[i]() };
      } catch (err) {
        results[i] = { status: "rejected", reason: err };
      }
    }
  }

  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

const concurrencyTasks = [
  () => new Promise((res) => setTimeout(() => res("Task1 done"), 500)),
  () => new Promise((_, rej) => setTimeout(() => rej("Task2 fail"), 200)),
  () => new Promise((res) => setTimeout(() => res("Task3 done"), 100)),
  () => new Promise((res) => setTimeout(() => res("Task4 done"), 300)),
];

limitedConcurrency(concurrencyTasks, 2).then((results) =>
  console.log("Limited Concurrency:", results, "\n")
);

/*
---------------------------------------------------------------
7. CANCELLATION PATTERN (SIMULATION)
---------------------------------------------------------------
Native Promises have no built-in cancellation, but you can 
simulate it with a flag or AbortController.
*/

function cancellablePromise(taskFn) {
  let cancelled = false;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const result = await taskFn(() => cancelled);
      if (!cancelled) resolve(result);
      else reject("Cancelled");
    } catch (err) {
      reject(err);
    }
  });
  return {
    cancel: () => {
      cancelled = true;
    },
    promise,
  };
}

// Example usage:
const { promise: cancelDemo, cancel } = cancellablePromise(
  async (isCancelled) => {
    for (let i = 0; i < 5; i++) {
      if (isCancelled()) return;
      await new Promise((res) => setTimeout(res, 100));
      console.log("Working...", i + 1);
    }
    return "Done without cancel";
  }
);

setTimeout(cancel, 250); // cancel midway

cancelDemo
  .then(console.log)
  .catch((err) => console.log("Cancel example:", err));

/*
---------------------------------------------------------------
8. PROMISIFYING CALLBACKS
---------------------------------------------------------------
Turn Node-style callbacks into promises
*/

function fakeReadFile(path, cb) {
  setTimeout(() => {
    if (path === "bad.txt") return cb(new Error("File not found"));
    cb(null, "File content for " + path);
  }, 200);
}

function promisify(fn) {
  return (...args) =>
    new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
}

const readFileAsync = promisify(fakeReadFile);
readFileAsync("good.txt")
  .then((content) => console.log("Promisified read:", content))
  .catch((err) => console.error(err));
