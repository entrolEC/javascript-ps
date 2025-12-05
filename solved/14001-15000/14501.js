let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(el => el.split(" ").map(Number))

const n = input[0][0]
input = input.slice(1)
const dp = Array(n+1).fill(0)

for(let i = 0; i < n; i++){
    const [t, p] = input[i]
    for(let j = i+t; j < n+1; j++) {
        dp[j] = Math.max(dp[j], dp[i] + p)
    }
}
console.log(dp.at(-1))
