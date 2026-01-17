/*
고속도로 길이의 최대가 1000이기 때문에 이분탐색을 하는것이 좋아보임.
휴게소 간격을 매개변수로 이분탐색하였음.
 */

let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number))

const [n, m, l] = input[0]
const station = n ===0 ? []: input[1].sort((a, b) => a - b)

// v간격으로 휴게소를 m개 지을 수 있는지
function isPossible(v) {
    let pos = 0, cnt = 0, index = 0;
    while(pos < l) {
        let newPos = pos + v;
        while(newPos >= station[index] && index < n) {
            newPos = station[index++] + v;
        }
        pos = newPos
        if(pos < l) {
            cnt++;
        }
    }
    return cnt > m
}

let left = 1;
let right = 1000;


while(left < right) {
    const mid = Math.floor((left + right) / 2);
    if(isPossible(mid)) {
        left = mid + 1;
    } else {
        right = mid;
    }
}

console.log(left)

/*

 */
