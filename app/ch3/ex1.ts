import * as Rx from "rxjs";

var source$ = Rx.Observable.create((observer) => {
    var intervalId, inx = 0;

    intervalId = setInterval(() => {
        observer.next(inx++);
    }, 500);

    return () => {
        clearInterval(intervalId);
    };
});

var subscription = source$.subscribe(
    value => {
        console.log(value);
        if (value === 13) {
            subscription.unsubscribe();
        }
    }
);