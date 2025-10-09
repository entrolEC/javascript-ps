const num = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .reduce((acc, cur) => Number(acc) * Number(cur), 1);

const arr = Array(10).fill(0)
String(num).split('').forEach(x => arr[x]++)
arr.forEach(x => console.log(x))
