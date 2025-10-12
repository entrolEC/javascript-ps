const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()

const arr = Array(26).fill(-1)
const defaultCode = 'a'.charCodeAt(0)

for(let i = 0; i < input.length; i++){
    const code = input.charCodeAt(i) - defaultCode
    if(arr[code] === -1) {
        arr[code] = i
    }
}

console.log(arr.join(" "))
