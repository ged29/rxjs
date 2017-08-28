"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rx = require("rxjs");
const source1$ = Rx.Observable.interval(1000).map(x => `Source 1 ${x}`).take(3);
const source2$ = Rx.Observable.interval(1000).map(x => `Source 2 ${x}`).take(3);
source1$.merge(source2$).subscribe(console.log);
//# sourceMappingURL=merge.js.map