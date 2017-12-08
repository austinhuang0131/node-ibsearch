# IbSearch
```js
const ibsearch = require("ibsearch"),
      ib = ibsearch("apices"); // API Key is optional but it gives you a higher rate

ib.search("lolita").then(function(data) {
    console.log(data);
}
```