function makeFirstArgLast(fn) {
 return function(...args) {
 const [first, ...rest] = args;
 return fn(...rest, first);
 };
}
function exampleFunction(a, b, c) {
 return `First argument: ${a}, Second argument: ${b}, Third argument: ${c}`;
}
const modifiedFunction = makeFirstArgLast(exampleFunction);
console.log(modifiedFunction(1, 2, 3)); 