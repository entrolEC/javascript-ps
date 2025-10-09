const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ")).slice(1)

/**
 * @param n
 * @param {string} str
 */
function duplicate(n, str) {
    const arr = str.split("");
    const result = arr.map(s => s.repeat(n)).join('')
    return result
}

input.forEach(input => {
    console.log(duplicate(Number(input[0]), input[1]))
})
