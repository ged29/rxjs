"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rx = require("rxjs");
var observable = Rx.Observable.create(observer => {
    observer.onNext('Simon');
    observer.onNext('Jen');
    observer.onNext('Sergi');
    observer.onCompleted(); // We are done
});
// .create((observer) => {
//     observer.onNext('Simon');
//     observer.onNext('Jen');
//     observer.onNext('Sergi');
//     observer.onCompleted(); // We are done
// }); 
//# sourceMappingURL=simple-observable.js.map