/*
재귀함수로 해결하되, 중복연산되는 경우를 방지하기 위해 dp를 활용한다.
dp[i][l][r] = min(dp[i+1][next][r] + P(l), dp[i+1][l][next] + P(r))
 */

let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(' ')
    .map(Number)

const dp = Array.from({length: 100000}, () => Array.from({length: 5}, () => Array(5).fill(-1)))

const powerMap = [[2,2,2,2,2],[2,1,3,4,3],[2,3,1,3,4],[2,4,3,1,3],[2,3,4,3,1]]

function getMinPower(i, l, r) {
    if(input[i] === 0) return 0
    else if(dp[i][l][r] > 0) return dp[i][l][r]
    return dp[i][l][r] = Math.min(getMinPower(i+1, input[i], r) + powerMap[l][input[i]], getMinPower(i+1, l, input[i]) + powerMap[r][input[i]])
}

console.log(getMinPower(0,0,0))




/*
1 2 2 4 0


1 2 3 2 0

 */
