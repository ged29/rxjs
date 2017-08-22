import * as Rx from "rxjs";

const newRandomNumber = () => Math.floor(Math.random() * 100);

class Money {
    constructor(private curr: string, private val: number) {
    }

    get value() {
        return this.val;
    }

    get currency() {
        return this.curr;
    }

    toString() {
        return `${this.currency} ${this.val}`;
    }
}

export default Rx.Observable.interval(2000)
    .timeInterval()
    .skip(1)
    .take(5)
    .do(int => console.log(`Checking every ${int.interval} milliseconds`))
    .map(num => new Money("USD", newRandomNumber()));