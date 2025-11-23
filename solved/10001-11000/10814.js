const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(el => el.split(' '))


const arr = input.slice(1, input.length);
const answer = arr.sort((a, b) => Number(a[0]) - Number(b[0]))

for (let i = 0; i < answer.length; i++) {
    console.log(answer[i][0], answer[i][1])
}
