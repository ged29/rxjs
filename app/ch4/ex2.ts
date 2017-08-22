import * as Rx from "rxjs";

Rx.Observable.from([1, 2])
    .delay(1000)
    .concat(Rx.Observable.from([3, 4]))
    .delay(1000)
    .concat(Rx.Observable.from([5, 6]))
    .delay(1000)
    .concat(Rx.Observable.from([7, 8]))
    .subscribe(console.log);