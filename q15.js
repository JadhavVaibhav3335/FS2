➔function splitIntoLines(multilineString) {
 return multilineString.split(/\r?\n/);
}
const multilineString = `This is the first line
This is the second line
And this is the third line`;
const linesArray = splitIntoLines(multilineString);
console.log(linesArray);