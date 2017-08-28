"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rx = require("rxjs");
const source$1 = Rx.Observable.range(1, 3).delay(3000);
const source$2 = Rx.Observable.of('a', 'b', 'c');
Rx.Observable.concat(source$1, source$2).subscribe(console.log);
//# sourceMappingURL=concat.js.map