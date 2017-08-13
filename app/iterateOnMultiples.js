"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IterateOnMultiples = (function () {
    function IterateOnMultiples(array, divisor) {
        if (divisor === void 0) { divisor = 1; }
        this.array = array;
        this.divisor = divisor;
        this.cursor = 0;
    }
    IterateOnMultiples.prototype.next = function () {
        while (this.cursor < this.array.length) {
            var value = this.array[this.cursor++];
            if (value % this.divisor === 0) {
                return value;
            }
        }
    };
    IterateOnMultiples.prototype.hasNext = function () {
        var cursor = this.cursor;
        while (cursor < this.array.length) {
            if (this.array[cursor++] % this.divisor === 0) {
                return true;
            }
        }
        return false;
    };
    return IterateOnMultiples;
}());
exports.default = IterateOnMultiples;
//# sourceMappingURL=iterateOnMultiples.js.map