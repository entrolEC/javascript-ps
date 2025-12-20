/*
dp[i][j] = 치즈버거i개, 감자튀김j개일때의 처리한 최대 주문의 수
*/

let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number))

const [n, m, k] = input[0]
input = input.slice(1)

const dp = Array.from({length: m+1}, () => Array(k+1).fill(-1))
let answer = 0

dp[0][0] = 0

for(let l = 0; l < n; l++) {
    const [a, b] = input[l]
    for(let i = m; i >= 0; i--) {
        for(let j = k; j >= 0; j--) {

            if(dp[i][j] > -1 && i + a <= m && j + b <= k) {
                dp[i+a][j+b] = Math.max(dp[i+a][j+b], dp[i][j] + 1)
                answer = Math.max(dp[i+a][j+b], answer)
            }
        }
    }
    if(a <= m && b <= k) {
        dp[a][b] = Math.max(dp[a][b], 1)
        answer = Math.max(dp[a][b], answer)
    }
}

console.log(answer)


/*
4 3 4
2 5
1 2
3 3
2 1

  1 2 3  4  5 6 7 8 9
1 
2
3
4
5  1
6
7
8
9
*/
