/*
dp[i][h] = 0~i구간까지 했을때 남은 체력 h로 획득할 수 있는 최대 점수
 */

let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number))

const [n, k]  = input[0]
const s = input[1]
const h = input[2]

const dp = Array.from({length: n}, () => Array(101).fill(-1))

dp[0][100] = 0
dp[0][100-h[0]] = s[0]

for(let i = 1; i < n; i++) {
    for(let j = 0; j <= 100; j++) {
        if(dp[i-1][j] >= 0) {
            let newHp = j + k
            if(j+k > 100) {
                newHp = 100
            }
            dp[i][newHp] = Math.max(dp[i][newHp], dp[i-1][j])

            newHp -= h[i]
            const newScore = dp[i-1][j] + s[i]
            if(newHp >= 0) {
                dp[i][newHp] = Math.max(dp[i][newHp], newScore)
            }
        }
    }
}

console.log(Math.max(...dp[n-1]))

/*
5 10
70 90 80 100 60
60 60 60 60 60

(40, 70), (100,0)
(50, 70), (60,90)

5 10
70 90 80 100 60
60 60 60 70 60

170
 */
