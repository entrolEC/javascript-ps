const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number))

const n = input[0][0]


/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @param {number[][]} points
 */
function solution(m, n, k, points) {
    let matrix = Array.from({ length: n }, () => Array(m).fill(0));
    let answer = 0;
    /**
     * @param {number} y
     * @param {number} x
     */
    function dfs(y, x) {
        const dx = [0, 1, 0, -1], dy = [-1, 0, 1, 0];
        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i], nx = x + dx[i];
            if(0 <= ny && ny < n && 0 <= nx && nx < m) {
                if(matrix[ny][nx] === 1) {
                    matrix[ny][nx] = 2;
                    dfs(ny, nx)
                }
            }
        }
    }

    for (let i = 0; i < k; i++) {
        const [x, y] = points[i]
        matrix[y][x] = 1;
    }

    for(let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 1) {
                dfs(i, j)
                answer++;
            }
        }
    }
    console.log(answer)
}

let line = 1
for (let i = 0; i < n; i++) {
    const [m, n, k] = input[line]
    solution(m, n, k, input.slice(line+1, line+k+1));
    line += k + 1
}

