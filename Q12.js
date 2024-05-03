function isSymbol(value) {
    return typeof value === 'symbol';
  }
  
  // Example usage:
  console.log(isSymbol(Symbol())); // Output: true
  console.log(isSymbol('abc')); // Output: false
  console.log(isSymbol(123)); // Output: false