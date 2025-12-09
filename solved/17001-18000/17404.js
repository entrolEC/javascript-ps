let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(el => el.split(" ").map(Number))

const n = input[0]
const originGrid = input.slice(1)

function solution(grid) {
    const dp = Array.from({length: grid.length}, () => Array(3).fill(0))
    dp[0] = [...grid[0]]
    for(let i = 1; i < n; i++) {
        dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + grid[i][0]
        dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + grid[i][1]
        dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + grid[i][2]
    }
    return Math.min(...dp[n-1])
}

const grid1 = JSON.parse(JSON.stringify(originGrid))
grid1[0][0] = Infinity
grid1[n-1][1] = Infinity
grid1[n-1][2] = Infinity

const grid2 = JSON.parse(JSON.stringify(originGrid))
grid2[0][1] = Infinity
grid2[n-1][0] = Infinity
grid2[n-1][2] = Infinity

const grid3 = JSON.parse(JSON.stringify(originGrid))
grid3[0][2] = Infinity
grid3[n-1][0] = Infinity
grid3[n-1][1] = Infinity

const answer = Math.min(solution(grid1),solution(grid2),solution(grid3))
console.log(answer)



/*
26 40 83
49 60 57
13 89 99

26 x  x
49 60 57
x  89 99

x  40 x
49 60 57
13 x  99

26 40 83
49 60 57
13 89 99

1 100 100
100 100 100
1 100 100


71 x  x
32 83 55
51 37 63
89 29 100
83 58 11
65 13 15
47 25 29
x  66 19

 */
