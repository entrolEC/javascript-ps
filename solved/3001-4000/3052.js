const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const map = new Map()
let cnt = 0;

for (let i = 0; i < input.length; i++) {
    const remainder = input[i] % 42
    if(!map.get(remainder)) {
        map.set(remainder, true)
        cnt++;
    }
}

console.log(cnt)
