const query = document.getElementById("query"), result = document.getElementById("result"), testDataA = [
    'github.com/Reactive-Extensions/RxJS',
    'github.com/ReactiveX/RxJS',
    'xgrommx.github.io/rx-book',
    'reactivex.io',
    'egghead.io/technologies/rx',
    'rxmarbles.com',
    'https://www.manning.com/books/rxjs-in-action'
];
query.addEventListener("keyup", (event) => {
    let timeoutId = null;
    clearTimeout(timeoutId);
    timeoutId = setTimeout((queryValue) => {
        clearResult();
        if (queryValue && queryValue.length > 0) {
            testDataA.forEach(item => {
                if (item.startsWith(queryValue)) {
                    appendToResult(item);
                }
            });
        }
    }, 1000, event.target.value);
});
function clearResult() {
    while (result.childElementCount > 0) {
        result.removeChild(result.firstChild);
    }
}
function appendToResult(item) {
    let text = document.createTextNode(item), li = document.createElement("LI");
    li.appendChild(text);
    result.appendChild(li);
}
//# sourceMappingURL=debounce1.js.map