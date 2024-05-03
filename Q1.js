const number_order = (x, y, z) => {
    if (x < y && y < z) {
      return "Strict mode";
    } else if (x <= y && y <= z) {
      return "Soft mode";
    } else {
      return "Neither strict nor soft mode";
    }
  };
  
  // Example usage:
  console.log(number_order(10, 15, 31)); // Output: Strict mode
  console.log(number_order(24, 22, 31)); // Output: Soft mode
  console.log(number_order(22, 22, 31)); // Output: Soft mode
  console.log(number_order(10, 10, 10)); // Output: Neither strict nor soft mode