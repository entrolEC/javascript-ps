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


const n = +require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()

const cards = Array.from({length: n}).map((_, idx) => idx+1)
const queue = new Queue(cards);

let flag = false
while(queue.size() > 1) {
    const pop = queue.dequeue()
    if(flag) {
        queue.enqueue(pop)
        flag = false
    } else {
        flag = true
    }
}

console.log(queue.dequeue())
