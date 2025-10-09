# 1. 입력

## 1-1. 입력값이 하나일 경우(문자)
```javascript
const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

//input: hello
//output: hello
```

## 1-2. 입력값이 하나일 경우(숫자)
```javascript
// 방법1)
const input = +require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

// 방법2)
const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();
let num = +input; 또는 parseInt(input) 또는 Number(input)

//input: 8
//output: 8
```

## 1-3. 입력값이 띄어쓰기로 구분된 한 줄의 값들인 경우(문자)
```javascript
const input = require("fs")
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString()
.trim()
.split(" ");

//input: hello world
//output: ['hello', 'world']
```

## 1-4. 입력값이 띄어쓰기로 구분된 한 줄의 값들인 경우(숫자)
```javascript
const input = require("fs")
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString()
.trim()
.split(" ")
.map(Number);

//input: 8 7 56
//output: [8, 7, 56]
```

## 1-5. 입력값이 여러 줄의 값들인 경우(문자)
```javascript
const input = require("fs")
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString()
.trim()
.split("\n");

//input:
//a
//b
//c
//d
//output: ['a', 'b', 'c', 'd']
```

## 1-6. 입력값이 여러 줄의 값들인 경우(숫자)
```javascript
const input = require("fs")
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString()
.trim()
.split("\n")
.map(Number);

//input:
//1
//2
//3
//4
//5
//output: [1, 2, 3, 4, 5]
```


## 1-7. 입력값이 여러 줄의 값들이 띄어쓰기로 구분되어 있는 경우(문자)
```javascript

const input = require("fs")
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString()
.trim()
.split("\n")
.map((el) => el.split(" "));

//input:
//ab cd
//ef gh
//my name is minjoon
//hi hello
//output: [
//  [ 'ab', 'cd' ],
//  [ 'ef', 'gh' ],
//  [ 'my', 'name', 'is', 'minjoon' ],
//  [ 'hi', 'hello' ]
//]
```


## 1-8. 입력값이 여러 줄의 값들이 띄어쓰기로 구분되어 있는 경우(모두 숫자)
```javascript
const input = require("fs")
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString()
.trim()
.split("\n")
.map((el) => el.split(" ").map(Number));

//input:
//3
//1 2
//3 4 5 6
//5 3 2 5
//0 1 1 0
//output: [ [ 3 ], [ 1, 2 ], [ 3, 4, 5, 6 ], [ 5, 3, 2, 5 ], [ 0, 1, 1, 0 ] ]
```
