let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number)

const n = input[0]
input = input.slice(1)
input[0] = 0
input.push(n+1)
const fibonacci = Array(41).fill(0)
let answer = 1

fibonacci[0]=1
fibonacci[1]=1
for(let i = 2; i <= n; i++){
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1]
}

for(let i = 1; i < input.length; i++){
    answer *= fibonacci[input[i] - input[i-1] - 1]
}

console.log(answer)
