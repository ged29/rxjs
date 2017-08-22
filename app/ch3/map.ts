import * as Rx from "rxjs";

Rx.Observable.from(['The quick brown fox', 'jumps over the lazy dog'])
    .map(str => str.split(" "))
    .do(arr => console.log(arr.length))
    .subscribe(value => {
        console.log(value);
    });