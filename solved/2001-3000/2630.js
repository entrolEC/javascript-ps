let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(el => el.split(" ").map(Number))

const n = input[0][0]
const grid = input.slice(1)

let white = 0, blue = 0;

function checkSubGrid(y, x, k) {
    let cnt = 0;
    for(let i = y; i < y+k; i++) {
        for(let j = x; j < x+k; j++) {
            cnt += grid[i][j]
        }
    }

    if(cnt === 0) {
        white++;
    } else if(cnt===k*k){
        blue++
    }else {
        checkSubGrid(y, x, k/2);
        checkSubGrid(y+k/2, x, k/2);
        checkSubGrid(y, x+k/2, k/2);
        checkSubGrid(y+k/2, x+k/2, k/2);
    }
}

checkSubGrid(0,0,n)

console.log(white)
console.log(blue)
