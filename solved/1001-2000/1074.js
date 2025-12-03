let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number)

const [n, r, c] = input
/**
 * @param r {number}
 * @param c {number}
 * @param n {number}
 * @param k {number} 정답이 될 숫자
 */
function checkGridPosition(r, c, n, k) {
    const m = 2 << n-1
    if(n===0) {
        return k;
    }
    if(r < m/2 && c < m/2) {
        return checkGridPosition(r, c, n-1, k)
    } else if(r < m/2 && c >= m/2) {
        return checkGridPosition(r, c-m/2, n-1, k + m*m/4)
    } else if(r >= m/2 && c < m/2) {
        return checkGridPosition(r-m/2, c, n-1, k + m*m/4*2)
    } else if(r >= m/2 && c >= m/2) {
        return checkGridPosition(r-m/2, c-m/2, n-1, k + m*m/4*3)
    }
}

const answer = checkGridPosition(r, c, n, 0)

console.log(answer)
