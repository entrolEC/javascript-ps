let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(el => el.split(" ").map(Number))

const n = input[0][0]
input = input.slice(1)
const dp = Array(n+1).fill(0)
for(let i = n-1; i >=0; i--) {
    const [t, p] = input[i]
    if(i+t <= n) {
        dp[i] = Math.max(dp[i+1], dp[i+t] + p)
    } else {
        dp[i] = dp[i+1]
    }
}

console.log(dp[0])

/*
10
6 100   140
5 50    90
4 40    80
3 30    70
2 20    60
1 10    50
1 10    40
2 20    30
3 30    30
4 40    0
5 50    0
        0
 */
