const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number))

const n = input[0][0]
const arr = input[1]

const dp = input[1].slice()

dp[0] = arr[0]
for(let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++) {
        if(arr[i] > arr[j]) {
            dp[i] = Math.max(dp[i], arr[i] + dp[j])
        }
    }
}
const answer = Math.max(...dp)

console.log(answer)

/*
1 100 2 50 60 3 5 6 7 8
1 100 2 50 60 3 5 6 7 8
1 101 3 53 113 0 0 0 0 0 0 0
*/
