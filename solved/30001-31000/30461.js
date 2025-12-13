/*
dp[i][j] = dp[i-1][j] + dp[i-1][j-1] + d[i-2][j-1] + input[i][j]
 */
const fs = require('fs')

const data = fs.readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf8')
    .trim()
    .split(/\s+/)
    .map(Number)

let idx = 0
const n = data[idx++]
const m = data[idx++]
const q = data[idx++]

const matrix = Array.from({ length: n }, () => Array(m))

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        matrix[i][j] = data[idx++]
    }
}

const dp = Array.from({ length: n }, () => Array(m).fill(0))

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        const a = i > 0 ? dp[i - 1][j] : 0
        const b = i > 0 && j > 0 ? dp[i - 1][j - 1] : 0
        const c = i > 1 && j > 0 ? dp[i - 2][j - 1] : 0
        dp[i][j] = a + b - c + matrix[i][j]
    }
}

let out = []
for (let i = 0; i < q; i++) {
    const y = data[idx++]
    const x = data[idx++]
    out.push(String(dp[y - 1][x - 1]))
}

console.log(out.join('\n'))
