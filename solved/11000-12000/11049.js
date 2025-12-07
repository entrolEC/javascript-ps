const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number))

const [n,m] = input[0]
const grid = input.slice(1)

const dp =  Array.from({ length: n }, () => Array(m).fill(0));

function isSafe(x, y) {
    return 0 <= x && x < m && 0 <= y && y < n
}

for (let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        let a=0,b=0, c=0
        if(isSafe(j-1, i-1)) {
            a = dp[i-1][j-1]
        }
        if(isSafe(j, i-1)) {
            b = dp[i-1][j]
        }
        if(isSafe(j-1, i)) {
            c = dp[i][j-1]
        }

        dp[i][j] = Math.max(a, b, c) + grid[i][j]
    }
}

console.log(dp[n-1][m-1])



/*
3 4
1 2 3 4
0 0 0 5
9 8 7 6

1 3 6 10
1 3 6 10
10182531
 */
