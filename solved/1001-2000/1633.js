const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number))

const dp = Array.from({length: input.length+1}, () => Array.from({length: 16}, () => Array(16).fill(0)))

for(let k = 1; k < input.length+1; k++) {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let a = 0, b = 0
            if(k>0) {
                if(i>0) {
                    a = dp[k-1][i-1][j] + input[k-1][0]
                }
                if(j>0) {
                    b = dp[k-1][i][j-1] + input[k-1][1]
                }
            }
            dp[k][i][j] = Math.max(a, b, dp[k-1][i][j])
        }
    }
}
console.log(dp[input.length][15][15])

/*
1 2
3 4
5 6
8 8
9 10

0   2   0   0   0
1   0   0   0   0
0   0   0   0   0
0   0   0   0   0
0   0   0   0   0

0   4   6   0   0
3   5   0   0   0
4   0   0   0   0
0   0   0   0   0
0   0   0   0   0


dp[k][i][j] = 0~k까지의 선수들 중에서 선택된 백이 i명, 선택된 흑이 j명일때 최고의 팀 점수
 */
