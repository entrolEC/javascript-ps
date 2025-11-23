const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(Number)

const n = input[0]

const arr = Array(11).fill(0)
arr[1] = 1
arr[2] = 2
arr[3] = 4

for(let i = 4; i < 11; i++) {
    arr[i] = arr[i-1] + arr[i-2] + arr[i-3]
}

for(let num of input.splice(1)) {
    console.log(arr[num])
}

/*
1 2 3 4 5 6 7 8 9
1 2 4 7 13 0 0 0 0 0 0 0
 */
