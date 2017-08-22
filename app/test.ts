import { debounce, sendRequest } from "./ch4/debounce2"

let debounced = debounce(sendRequest, 1000);

document.getElementById("query").addEventListener("keyup", event => {
    debounced((event.target as HTMLInputElement).value);
});