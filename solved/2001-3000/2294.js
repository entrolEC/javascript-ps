const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const [n, k] = input[0]
const arr = input.slice(1).map(el => el[0])

const dp = Array(k+1).fill(Infinity)
dp[0] = 0

arr.sort((a, b) => b-a)

for (let i = 0; i < n; i++) {
    const v = arr[i]
    for(let j = 0; j < k; j++){
        if(dp[j] !== Infinity && j+v <= k) {
            dp[j+v] = Math.min(dp[j+v], dp[j]+1)
        }
    }
}
const answer = dp[k] === Infinity ? -1 : dp[k]
console.log(answer)
