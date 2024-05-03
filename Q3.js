//Write a JavaScript program to mutate the original array to filter out the values specified, based on a given iterator function.

    //Check if the last argument provided is a function.
   // Use Array.prototype.map() to apply the iterator function fn to all array elements.
    //Use Array.prototype.filter() and Array.prototype.includes() to pull out the values that are not needed.
   // Set Array.prototype.length to mutate the passed in an array by resetting its length to 0.
  //  Use Array.prototype.push() to re-populate it with only the pulled values.
	
  //async : it makes sure that a promise is returned and
  // if it is not returned then JavaScript automatically wraps 
  //it in a promise which is resolved with its value

  // await :  placed before the call to a function or variable that returns a promise.
const filterWithIterator = (arr, fn) => {
    if (typeof fn !== 'function') {
      throw new Error('Iterator function must be provided');
    }
  
    const filteredValues = arr.filter(item => !fn(item));
  
    arr.length = 0;
    filteredValues.forEach(value => arr.push(value));
  };
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5];
  
  // Define an iterator function
  const iteratorFn = value => value % 2 === 0; // Filters out even numbers
  
  // Mutate the original array to filter out even numbers
  filterWithIterator(originalArray, iteratorFn);
  
  console.log(originalArray); // Output: [1, 3, 5]
  