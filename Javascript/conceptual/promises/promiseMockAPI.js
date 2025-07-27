// simulate an API using promises

const APIMock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const statusCode = 200; // or 400, 500 to test error handling
      if (statusCode === 200) {
        resolve({
          message: "Success",
          data: {
            // your data here
          },
        });
      } else {
        reject({
          message: "Error",
        });
      }
    }, 1000);
  });
};

APIMock()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
