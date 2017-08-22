"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rx = require("rxjs");
Rx.Observable.from(['The quick brown fox', 'jumps over the lazy dog'])
    .map(str => str.split(" "))
    .do(arr => console.log(arr.length))
    .subscribe(value => {
    console.log(value);
});
//# sourceMappingURL=map.js.map