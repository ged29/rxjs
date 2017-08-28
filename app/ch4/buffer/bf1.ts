import * as Rx from "rxjs";

let timerA = Rx.Observable.timer(0, 50),
    timerB = Rx.Observable.timer(0, 500);

    timerA.buffer(timerB).subscribe(console.log);
