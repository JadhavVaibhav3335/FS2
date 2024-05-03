function toSnakeCase(str) {
    return str
      .match(/[a-zA-Z0-9]+/g)
      .map(word => word.toLowerCase())
      .join('_');
  }
  
  function toKebabCase(str) {
    return str
      .match(/[a-zA-Z0-9]+/g)
      .map(word => word.toLowerCase())
      .join('-');
  }
  
  // Example usage:
  const inputString = "snehal Ghorpade msc computer science";
  console.log(toSnakeCase(inputString)); // Output: hello_world
  console.log(toKebabCase(inputString));