const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(' ')
    .map(Number)

let delta = 0
let mixed = false

for(let i = 1; i < input.length; i++) {
    const prev = input[i-1]
    const curr = input[i]
    const newDelta = prev - curr;

    if(delta !== 0 && ((newDelta > 0 && delta < 0) || (newDelta < 0 && delta > 0))) {
        mixed = true
    }
    delta = newDelta;
}

if(mixed) {
    console.log('mixed')
} else {
    if(delta < 0) {
        console.log('ascending')
    } else {
        console.log('descending')
    }
}
