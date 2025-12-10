let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(el => el.split(" "))

const n = Number(input[0][0])
const grid = input.slice(1)
const dp = Array.from({length: n+1},() => Array(2).fill(0))
const dp2 = Array.from({length: n+1},() => Array(2).fill(0))
dp[0] = [1,1]
dp2[0] = [1,1]

function calculate(max, sign, num) {
    let result = 0
    if(sign === '+') {
        result = max + num
    } else if(sign === '-') {
        result = max - num
    } else if(sign === '*') {
        result = max * num
    } else if(sign === '/') {
        result = Math.floor(max / num)
    }
    return result <= 0 ? -Infinity : result
}

for(let i = 0; i < n; i++) {
    const max = Math.max(...dp[i])
    dp[i+1][0] = calculate(max, grid[i][0][0], Number(grid[i][0][1]))
    dp[i+1][1] = calculate(max,  grid[i][1][0], Number(grid[i][1][1]))

    const max2 = Math.max(...dp2[i])
    dp2[i+1][0] = Math.max(calculate(max2, grid[i][0][0], Number(grid[i][0][1])), ...dp[i])
    dp2[i+1][1] = Math.max(calculate(max2,  grid[i][1][0], Number(grid[i][1][1])),...dp[i])
}
const answer = Math.max(...dp[n], ...dp2[n])
console.log(answer <= 0 ? 'ddong game' : answer)
