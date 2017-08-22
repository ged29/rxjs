"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rx = require("rxjs");
const newRandomNumber = () => Math.floor(Math.random() * 100);
class Money {
    constructor(curr, val) {
        this.curr = curr;
        this.val = val;
    }
    get value() {
        return this.val;
    }
    get currency() {
        return this.curr;
    }
    toString() {
        return `${this.currency} ${this.val}`;
    }
}
exports.default = Rx.Observable.interval(2000)
    .timeInterval()
    .skip(1)
    .take(5)
    .do(int => console.log(`Checking every ${int.interval} milliseconds`))
    .map(num => new Money("USD", newRandomNumber()));
//# sourceMappingURL=ex1.js.map