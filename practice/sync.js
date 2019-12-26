var fs = require("fs");

/*
// readFileSync

console.log("A");
var result = fs.readFileSync("practice/sample.txt", "utf-8"); // 동기적
console.log(result);
console.log("C");
*/

console.log("A");
fs.readFile("practice/sample.txt", "utf-8", function(err, result) {
  console.log(result);
}); // 비동기적
console.log("C");
