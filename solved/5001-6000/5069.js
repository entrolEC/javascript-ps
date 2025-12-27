/*
육각 좌표계
dp[l][i][j] = l번 이동 했을 때, (i, j)까지 도달 가능한 경우의 수
 */

let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(Number)

const t = input[0]
input = input.slice(1)

const dp = Array.from({length: 15}, () => Array.from({length: 15}, () => Array(15).fill(-1)))
const dx = [1, 1, 0, -1, -1, 0], dy = [0, 1, 1, 0, -1, -1]
dp[0][7][7] = 0

for(let l = 1; l < 15; l++) {
    for(let i = 0; i < 15; i++) {
        for(let j = 0; j < 15; j++) {
            for(let d = 0; d < 6; d++) {
                if(0 <= i+dy[d] && i+dy[d] < 15 && 0 <= j+dx[d] && j+dx[d] < 15) {
                    const target = dp[l-1][i+dy[d]][j+dx[d]]
                    if(target > -1) {
                        dp[l][i][j] += target + 1;
                    }
                }
            }
        }
    }
}

for(let i = 0; i < t; i++) {
    console.log(dp[input[i]][7][7] + 1)
}

/*
2 6
3 12
4 90
 */
