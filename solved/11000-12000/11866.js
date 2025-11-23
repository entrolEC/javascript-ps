function Queue(init) {
    this._a = init && init.length ? init.slice() : [];
    this._h = 0;
}

Queue.prototype.enqueue = function (v) {
    this._a.push(v);
};

Queue.prototype.dequeue = function () {
    var a = this._a, h = this._h;
    if (h !== a.length) {
        var v = a[h];
        this._h = ++h;
        if (h << 1 >= a.length) {
            a.splice(0, h);
            this._h = 0;
        }
        return v;
    }
    return undefined;
};

Queue.prototype.peek = function () {
    var a = this._a, h = this._h;
    return h !== a.length ? a[h] : undefined;
};

Queue.prototype.size = function () {
    return this._a.length - this._h;
};


const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(' ')
    .map(el => Number(el))


const n = input[0]
const k = input[1]

const queue = new Queue(Array.from({length: n}).map((_, idx) => idx+1))
const answers = []

for(let i = 1; i <= n*k; i++) {
    const pop = queue.dequeue()
    if(i % k === 0) {
        answers.push(pop)
    } else {
        queue.enqueue(pop)
    }
}

console.log(`<${answers.join(', ')}>`)
