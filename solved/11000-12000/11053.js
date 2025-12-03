const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number))


const n = input[0][0]
const arr = input[1]

const dp = Array(n).fill(1)

for(let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++) {
        if(arr[i] > arr[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }
}

console.log(Math.max(...dp))
