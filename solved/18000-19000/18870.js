const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number))

const n = input[0][0]

/**
 * @param {number[]} arr
 */
function solution(arr) {
    let answer = []
    const map = new Map()
    const distinct = [...new Set(arr)]
    distinct.sort((a, b) => a-b)
    distinct.forEach((n,i) => {
        map.set(n, i)
    })
    arr.forEach((n, i) => {
        answer.push(map.get(n))
    })
    console.log(answer.join(' '))
}


solution(input[1])
