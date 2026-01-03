/*
만들 수 있는 블루레이의 최대 갯수를 구하는 함수 makeBlueray에 대해
최소 블루레이 크기 와 최대 블루레이 크기로 이분탐색을 진행
 */

let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number))

const [n, m] = input[0]
input = input.slice(1)[0]

// maxLength 에 대해 몇개의 블루레이를 만들 수 있는지
function makeBlueray(maxLength) {
    let index = 0, currLength = 0, complete = 0;

    while(index < n) {
        if(input[index] > maxLength) {return Infinity}
        if(currLength + input[index] <= maxLength) {
            currLength += input[index++];
        } else {
            complete++;
            currLength = 0;
        }
    }
    if(currLength > 0) {
        complete++;
    }
    return complete
}

let left = 0, right = 10000*100000

while(left < right) {
    let mid = Math.floor((right + left)/2);
    if(makeBlueray(mid) > m) {
        left = mid + 1;
    } else {
        right = mid
    }
}

console.log(left)
