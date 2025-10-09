const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

const splited = input.split(' ')
if(splited[0] === '') console.log(0)
else console.log(splited.length)
