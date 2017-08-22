export class BufferIterator<T>{
    nextIndex: number;

    constructor(
        private arr: T[],
        private bufferSize = 2) {
        this.nextIndex = 0;
    }

    [Symbol.iterator](): Iterator<T[]> {
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