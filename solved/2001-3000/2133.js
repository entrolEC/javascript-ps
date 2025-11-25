const input = +require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()

const dp = Array(31).fill(0)
dp[0] = 1
dp[2] = 3

for(let i = 4; i<31; i+=2) {
    let result = 0
    result += dp[i-2] * dp[2]
    for(let j = i-4; j>=0; j-=2) {
        result += dp[j] *2
    }
    dp[i] = result
}

console.log(dp[input])
