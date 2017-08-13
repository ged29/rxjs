import * as Rx from "rxjs";

var observable = Rx.Observable.create(observer => {
    observer.onNext('Simon');
    observer.onNext('Jen');
    observer.onNext('Sergi');
    observer.onCompleted(); // We are done
});

//observable.