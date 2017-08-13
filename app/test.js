"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IterateOnMultiples_1 = require("./IterateOnMultiples");
var consumer = new IterateOnMultiples_1.default([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
console.log(consumer.next(), consumer.hasNext()); // 3 true
console.log(consumer.next(), consumer.hasNext()); // 6 true
console.log(consumer.next(), consumer.hasNext()); // 9 false
//import * as Rx from "rxjs";
// Rx.Observable
//     .fromEvent<MouseEvent>(document, "click")
//     .filter(c => c.clientX > window.innerWidth / 2)
//     .take(10)
//     .subscribe(c => console.log(c.clientX, c.clientY)); 
//# sourceMappingURL=test.js.map