"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IterateOnMultiples {
    constructor(array, divisor = 1) {
        this.array = array;
        this.divisor = divisor;
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
    hasNext() {
        var cursor = this.cursor;
        while (cursor < this.array.length) {
            if (this.array[cursor++] % this.divisor === 0) {
                return true;
            }
        }
        return false;
    }
}
exports.default = IterateOnMultiples;
//# sourceMappingURL=iterateOnMultiples.js.map