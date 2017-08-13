export default class IterateOnMultiples {
    cursor: number;

    constructor(
        private array: any[],
        private divisor: number = 1) {
        this.cursor = 0;
    }

    next() {
        while (this.cursor < this.array.length) {
            let value = this.array[this.cursor++];
            if (value % this.divisor === 0) {
                return value;
            }
        }
    }

    hasNext(): boolean {
        var cursor = this.cursor;

        while (cursor < this.array.length) {
            if (this.array[cursor++] % this.divisor === 0) {
                return true;
            }
        }

        return false;
    }
}