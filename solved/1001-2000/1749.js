let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number))

const [n, m] = input[0]
input = input.slice(1)
let max = -Infinity

function getMatrix(x, y) {
    const rowSum = Array.from({length: n}, () => Array(m).fill(0))
    const sum = Array.from({length: n}, () => Array(m).fill(0))
    for(let i = y; i < n; i++) {
        rowSum[i][0] = input[i][0]
        for(let j = x+1; j < m; j++) {
            rowSum[i][j] = rowSum[i][j-1] + input[i][j]
        }
    }

    for(let i = x; i < m; i++) {
        sum[0][i] = rowSum[0][i]
    }
    for(let i = y+1; i < n; i++) {
        sum[i][0] = sum[i-1][0] + input[i][0]
        for(let j = x+1; j < m; j++) {
            sum[i][j] = sum[i-1][j] + rowSum[i][j-1] + input[i][j]
        }
    }
    return sum
}

function getSum(sum, y1, x1, y2, x2) {
    const leftSum = x1 > 0 ? sum[y2][x1-1] : 0
    const topSum = y1 > 0 ? sum[y1-1][x2] : 0
    const dupSum = y1 > 0 && x1 > 0 ? sum[y1-1][x1-1] : 0

    return sum[y2][x2] - leftSum - topSum + dupSum
}

const sum = getMatrix(0, 0)

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        for(let k = i; k < n; k++) {
            for(let l = j; l < m; l++) {
                max = Math.max(getSum(sum, i, j, k, l), max)
            }
        }
    }
}
console.log(max)
