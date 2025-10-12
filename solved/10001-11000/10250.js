const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

/**
 * @param {number} h
 * @param {number} w
 * @param {number} n
 */
function getRoom(h, w, n) {
    const a = Math.trunc((n-1)/h) + 1
    const b = (n-1)%h+1
    return `${b}${String(a).padStart(2, '0')}`
}

for (let i = 1; i <= input[0][0]; i++) {
    const room = getRoom(input[i][0], input[i][1], input[i][2])
    console.log(room)
}
