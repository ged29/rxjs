"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BufferIterator {
    constructor(arr, bufferSize = 2) {
        this.arr = arr;
        this.bufferSize = bufferSize;
        this.nextIndex = 0;
    }
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.nextIndex >= this.arr.length) {
                    return { value: undefined, done: true };
                }
                else {
                    let buffer = new Array(this.bufferSize);
                    for (let inx = 0; inx < this.bufferSize && this.nextIndex < this.arr.length; inx++) {
                        buffer[inx] = (this.arr[this.nextIndex++]);
                    }
                    return { value: buffer, done: false };
                }
            }
        };
    }
}
exports.BufferIterator = BufferIterator;
//# sourceMappingURL=BufferIterator.js.map