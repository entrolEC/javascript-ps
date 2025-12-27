/*
dp[n] = n번째 두더지를 잡았을때 잡은 두더지 갯수
 */

let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number))

const [n, s] = input[0]
input[0] = [0,0,0]
let answer = 0;

input.sort((a, b) => a[2] - b[2])

const dp = Array(n+1).fill(-1)

function getDistance(a1, b1, a2, b2) {
    return Math.ceil(Math.sqrt(Math.pow(a1-a2, 2) + Math.pow(b1-b2, 2)))
}

dp[0] = 0
for(let i = 1; i < n+1; i++) {
    for(let j = 0; j < i; j++) {
        const [a1, b1, t1] = input[i]
        const [a2, b2, t2] = input[j]
        if(dp[j] === -1) continue
        const distance = getDistance(a1, b1, a2, b2)
        if(Math.abs(distance) <= Math.abs(s * (t1-t2))) {
            dp[i] = Math.max(dp[i], dp[j] + 1)
            answer = Math.max(answer, dp[i])
        }
    }
}

console.log(answer)

/*
0 0 0       0
100 0 100   1
101 0 101   2
1 0 101     1
102 0 102   3
2 0 102     2
3 0 103     3
4 0 104     4



0 0 0       0
100 0 100   1
101 0 101   2
1 0 101     1
102 0 102   3
2 0 102     2
3 0 103     3
4 0 104     4


0 0 0
1 1 1
-1 -1 1
0 0 2

2 1
100 100 1
101 100 2
 */
