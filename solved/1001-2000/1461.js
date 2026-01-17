/*
음수 , 양수 분리하여 M개씩 운반.  M개의 책 중 가장 큰 값만 비용으로 계산한다.
비용중 가장 큰 비용은 편도 비용으로만 계산한다.
 */

let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number))

const [n, m] = input[0]

input = input[1].sort((a, b) => a - b)

let pos = [], neg = [], maxValue = 0, answer = 0;

for(let i = 0 ; i < n; i++) {
    if(input[i] < 0) neg.push(Math.abs(input[i]))
    else break;
}

for(let i = n-1 ; i >= 0; i--) {
    if(input[i] >= 0) pos.push(Math.abs(input[i]))
    else break;
}


for(let i = 0; i < pos.length; i+=m) {
    maxValue = Math.max(pos[i], maxValue)
    answer += pos[i]
}

for(let i = 0; i < neg.length; i+=m) {
    maxValue = Math.max(neg[i], maxValue)
    answer += neg[i]
}

console.log(answer * 2 - maxValue)

/*
7 2
-39 -37 -29 -28 -6
2 11

[39, 29, 6]
[11]

39 29 29 6 6 11 11
109 22
131
 */
