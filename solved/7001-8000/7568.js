const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

for(let i = 1; i < input.length; i++) {
    const weight = input[i][0]
    const height = input[i][1]
    let rank = 1
    for(let j = 0; j < input.length; j++) {
        const targetWeight = input[j][0]
        const targetHeight = input[j][1]
        if(weight < targetWeight && height < targetHeight) { // 본인보다 확실히 큰 사람이 있으면
            rank += 1
        }
    }
    process.stdout.write(`${rank} `)
}
