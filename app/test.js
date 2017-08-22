"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debounce2_1 = require("./ch4/debounce2");
let debounced = debounce2_1.debounce(debounce2_1.sendRequest, 1000);
document.getElementById("query").addEventListener("keyup", event => {
    debounced(event.target.value);
});
//# sourceMappingURL=test.js.map