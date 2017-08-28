import * as Rx from "rxjs";
import { Observable } from "rxjs/Observable";

export default class WikiSearch {
    URL = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch';

    searchBox: Element;
    results: Element;
    count: Element;

    constructor() {
        this.searchBox = document.querySelector('#query'); //-> <input>
        this.results = document.querySelector('#result');  //-> <ul>
        this.count = document.querySelector('#count');  //-> <ul> 
        this.subscribe();
    }

    subscribe() {
        Rx.Observable.fromEvent(this.searchBox, "keyup")
            .debounceTime(500)
            .pluck("target", "value")
            .filter((value: string) => value && value.length > 0)
            .do(term => console.log(`Searching with term ${term}`))
            .map(query => `${this.URL}=${query}`)
            .mergeMap((query, index) =>
                Rx.Observable.ajax(query)
                    .pluck("response", "query", "search")
                    .defaultIfEmpty([])
            )
            .mergeMap((items: any[]) => {
                var result = items.map(item => item.title);
                return result;
            })
            .do((titles: string[]) => console.log(titles))
            .subscribe();
            // .subscribe((titles: string[]) => {
            //     this.count.textContent = `${titles.length} results`;
            //     this.clearResults();
            //     this.appendResults(titles);
            // });
    }

    clearResults() {
        while (this.results.childElementCount > 0) {
            this.results.removeChild(result.firstChild);
        }
    }

    appendResults(values: string[]) {
        for (let value of values) {
            let li = document.createElement('li');
            let text = document.createTextNode(value);

            li.appendChild(text);
            this.results.appendChild(li);
        }
    }
}