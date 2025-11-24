const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const [n, k] = input[0]
const arr = input.slice(1)
let dp = Array(k+1).fill(-1)

dp[0] = 0;

for(let i = 0; i < n; i++) {
    const [w, v] = arr[i]
    for(let j = k-1; j >= 0; j--) {
        if (dp[j] > -1 && w + j <= k) {
            dp[w + j] = Math.max(dp[w + j], dp[j] + v)
        }
    }
}

console.log(Math.max(...dp))
