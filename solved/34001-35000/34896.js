/*
힘r 이 1~2*10^8 이기 때문에 힘 r일때 최소비용 c를 구하는 함수에 대하여 이분탐색을 하면 된다.
 */

let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number))

const n = input[0][0]
const _x = input[1]
const _c = input[2]
const b = input[3]

const xc = _x.map((x, idx) => [x, _c[idx]]).sort((a, b) => a[0] - b[0])

const x = xc.map(xc => xc[0])
const c = xc.map(xc => xc[1])

// 힘이 r일때 최소 비용 c를 구하는 함수
function getValue(r) {
    let totalValue = 0
    let intervalValue = c[0]
    for(let i = 0; i < n-1; i++) {
        // 폭발이 다음 폭탄에 닿는 경우
        if(x[i] + r >= x[i+1]) {
            intervalValue = Math.min(intervalValue, c[i+1])
        } else {
            totalValue += intervalValue
            intervalValue = c[i+1]
        }
    }
    totalValue += intervalValue
    return totalValue
}

let left = 1;
let right = 200000000;

while(left < right) {
    const mid = Math.floor((left + right) / 2);
    const value = getValue(mid)
    if(value > b) {
        left = mid + 1
    } else {
        right = mid
    }
}

console.log(left)

/*
5
1 3 6 10 13
5 2 3 4 1
7

1 2 3 4 5 6 7 8 9 10 11 12 13
5 0 2 0 0 3 0 0 0 4  0  0  1


1 2 3 4 5 6 7 8 9 10 11 12 13


7
4 11 0 2 7 15 20
2 8 3 6 5 1 4
10
*/
