const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let max = 0
let index = -1
input.forEach((num, i) => {
    if(max < num) {
        max = num;
        index = i+1
    }
})

console.log(max)
console.log(index)
