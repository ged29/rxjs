import * as Rx from "rxjs";

Rx.Observable.from([1, 2, 3, 4, 5])
    .filter(n => {
        console.log(`filtering ${n}`);
        return n % 2 === 0;
    })
    .map(n => {
        console.log(`mapping ${n}`);
        return n * n;
    })
    .subscribe(console.log);