//passing a function inside template literals using arrow function print a variable is greater than or less than and print true or false.


const compareValue = (n1, n2) => {
    
  
    return `${n1} is ${n1 > n2 ? 'greater' : 'less'} than ${n2}: ${n1 > n2}`;
  };
  
  const n1  = 50;
  const n2 = 30;
  
  console.log(compareValue(n1,n2));