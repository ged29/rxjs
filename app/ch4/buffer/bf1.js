"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rx = require("rxjs");
let timerA = Rx.Observable.timer(0, 50), timerB = Rx.Observable.timer(0, 500);
timerA.buffer(timerB).subscribe(console.log);
//# sourceMappingURL=bf1.js.map