const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")

/**
 * @param {string} input
 */
function isPalindrome (input) {
    for(let i = 0; i < Math.trunc(input.length / 2); i++) {
        const opposite = input.length - i - 1;
        if(input[i] !== input[opposite]) {
            return 'no'
        }
    }
    return 'yes'
}

for (let i = 0; i < input.length-1; i++) {
    const result = isPalindrome(input[i])
    console.log(result);
}
