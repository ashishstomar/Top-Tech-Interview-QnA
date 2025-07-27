// implement a retry mechanism for API calls

const retry = (apiCall, retries, delay) => {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    // An inner function to handle the attempts
    const attempt = async () => {
      try {
        // Await the result of the API call
        const result = await apiCall();
        // If successful, resolve the promise with the result
        resolve(result);
      } catch (error) {
        // If it fails, check if retries are left
        if (retries > 0) {
          console.log(
            `Attempt failed. Retrying in ${delay}ms... (${retries} retries left)`
          );
          // Wait for the specified delay
          setTimeout(() => {
            // Recursively call attempt with one less retry
            retry(apiCall, retries - 1, delay)
              .then(resolve)
              .catch(reject);
          }, delay);
        } else {
          // If no retries are left, reject the promise
          console.log("All retries failed.");
          reject(error);
        }
      }
    };
    // Initial call
    attempt();
  });
};

// A mock API that consistently fails
const failingAPIMock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("API call failed!");
      reject({ message: "Error: Server not responding" });
    }, 500); // 0.5 second delay for the mock call
  });
};

// Call the retry function with the failing API
retry(failingAPIMock, 3, 1000) // Retry 3 times with a 1-second delay
  .then((response) => {
    console.log("Success:", response);
  })
  .catch((error) => {
    console.error("Final Error after all retries:", error);
  });
