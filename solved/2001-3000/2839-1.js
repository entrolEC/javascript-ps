const input = +require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()

const dp = Array(5000).fill(Infinity)
dp[3] = 1
dp[5] = 1

for (let i = 6; i <= input; i++) {
    dp[i] = Math.min(dp[i-3], dp[i-5]) + 1
}

console.log(dp[input] === Infinity ? -1 : dp[input])
