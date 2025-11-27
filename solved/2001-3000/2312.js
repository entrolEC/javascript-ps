let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(el => el.split(" ").map(Number))

const n = input[0][0]
input = input.slice(1)

function solution(l, arr) {
    let max= {value: arr[0], idx: 0}, maxIdx = 0
    const dp = Array(l).fill({value: 0, idx: 0})
    dp[0] = {value: arr[0], idx:0}

    for(let i = 1; i < l; i++) {
        if(dp[i-1].value > 0) {
            dp[i] = {value: dp[i-1].value + arr[i], idx: dp[i-1].idx}
        } else {
            dp[i] = {value: arr[i], idx: i}
        }
        if(dp[i].value >= max.value) {
            if(dp[i].value === max.value && i-dp[i].idx >= maxIdx - max.idx) continue
            max = dp[i]
            maxIdx = i
        }
    }
    return {max, maxIdx}
}

let answer = 0
let output = []
for(let i = 0; i < n*2; i+=2) {
    const l = input[i]
    const arr = input[i+1]
    const {max, maxIdx} = solution(l, arr)
    answer += max.value
    output.push([max.idx+1, maxIdx+1])
}

console.log(answer)
for(let i = 0; i < n; i++) {
    console.log(output[i].join(' '))
}

/*
1
5
1 2 3 -6 6
 */
