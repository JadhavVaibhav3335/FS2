function iterateNTimes(n, fn) {
    for (let i = 0; i < n; i++) {
      if (fn.call() === false) break;
    }
  }
  
  // Example usage:
  iterateNTimes(5, () => {
    console.log("num");
  });