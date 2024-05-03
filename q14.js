➔function iterateCallback(n, fn) {
 for (let i = 0; i < n; i++) {
 if (fn.call() === false) {
 break;
 }
 }
}
let counter = 0;
iterateCallback(5, function() {
 console.log("Iteration", counter);
 counter++;
 if (counter >= 3) {
 return false;
 }
});