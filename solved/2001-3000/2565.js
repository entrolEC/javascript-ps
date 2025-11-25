const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const n = input[0][0]
const data = input.slice(1)
const dp = Array(n).fill(1)
data.sort((a, b) => a[0] - b[0]);

for(let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++) {
        if(data[i][1] > data[j][1]) {
            dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }
}

console.log(n-Math.max(...dp))
