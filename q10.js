function composeAsync(...funcs) {
 return async function (arg) {
 return funcs.reduce(async (prevPromise, nextFunc) => {
 const result = await prevPromise;
 return nextFunc(result);
 }, Promise.resolve(arg));
 };
}
async function addOneAsync(value) {
 return value + 1;
}
async function doubleAsync(value) {
 return value * 2;
}
async function squareAsync(value) {
 return value ** 2;
}
const composedAsyncFunction = composeAsync(addOneAsync, doubleAsync, squareAsync);
composedAsyncFunction(3)
 .then(result => {
 console.log("Result:", result);
 })
 .catch(error => {
 console.error("Error:", error);
 });