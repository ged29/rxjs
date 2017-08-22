"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resultElm = document.getElementById("result"), testData = [
    'github.com/Reactive-Extensions/RxJS',
    'github.com/ReactiveX/RxJS',
    'xgrommx.github.io/rx-book',
    'reactivex.io',
    'egghead.io/technologies/rx',
    'rxmarbles.com',
    'https://www.manning.com/books/rxjs-in-action'
];
function debounce(fn, time) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout.apply(window, [fn, time].concat(args));
    };
}
exports.debounce = debounce;
function sendRequest(query) {
    clearResultElm();
    if (query && query.length > 0) {
        testData.forEach(item => {
            if (item.startsWith(query)) {
                appendToResultElm(item);
            }
        });
    }
}
exports.sendRequest = sendRequest;
function clearResultElm() {
    while (resultElm.childElementCount > 0) {
        resultElm.removeChild(result.firstChild);
    }
}
function appendToResultElm(item) {
    let text = document.createTextNode(item), li = document.createElement("LI");
    li.appendChild(text);
    result.appendChild(li);
}
//# sourceMappingURL=debounce2.js.map