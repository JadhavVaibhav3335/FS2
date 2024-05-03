const asyncToPromise = fn => (...args) => new Promise((resolve, reject) => {
    fn(...args, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
  
  // Example usage:
  // Assuming asyncFunction is an asynchronous function that follows the Node.js callback pattern (takes a callback as the last argument)
  const asyncFunction = (param1, param2, callback) => {
    // Some asynchronous operation
    setTimeout(() => {
      const result = param1 + param2;
      callback(null, result);
    }, 1000);
  };
  
  // Convert asyncFunction to return a promise
  const asyncFunctionPromise = asyncToPromise(asyncFunction);
  
  // Now you can use asyncFunctionPromise as a promise-based function
  asyncFunctionPromise(2, 3)
    .then(result => console.log(result))
    .catch(error => console.error(error));