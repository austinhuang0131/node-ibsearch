# IbSearch
![](https://nodei.co/npm/ibsearch.png?downloads=true&downloadRank=true&stars=true)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/430d9f1edcda4e548332f4160d8840a5)](https://www.codacy.com/app/austinhuang0131/node-ibsearch?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=austinhuang0131/node-ibsearch&amp;utm_campaign=Badge_Grade)

[IbSearch](https://ibsearch.xxx) searches 11 image boards at once: gelbooru, danbooru, rule34, furrybo, yandere, konachan, safebooru, xbooru, e621, and uberbooru. This module utilizes its API as well as providing a simple way to extract image URL.

The only function is `.search(query, options)` where `query` is a string and `options` is an object. Example below...

```js
const ibsearch = require("ibsearch"),
      ib = ibsearch("api_key"); // API Key is optional but it gives you a higher rate

ib.search("lolita").then(function(data) {
      console.log(data[0].link); // SPECIAL!
      console.log(data); // Normal
}

// You can add options (which is optional obviously)
ib.search("jk", {
      limit: 1, // Number or a string with a number: Maximum amount of results in the return. Default = 25
      page: 1 // Page number. Default = 1
}).then(function(data) {
}
```
For each object in `data`, it is everything described in the [API documentation](https://ibsearch.xxx/api/v1/images), **plus a `link` property** so you can just fetch your image link without hassle. Here's an example:

```js
[ { id: '11508',
    rating: 'q',
    tags: '1girl ass back black_hair blush dimples_of_venus ganto glasses kantai_collection kirishima_(kantai_collection) lips looking_at_viewer looking_back pencil_skirt short_hair simple_background white_background',
    format: 'jpg',
    width: '600',
    height: '850',
    area: '510000',
    aspectw: '705',
    aspecth: '1416',
    sha1: '6A6F780FA9F5AE6CBD24A5C5C445CC54585D89C0',
    md5: 'F108FD9C0647A88D349A0B34295C7E41',
    found: '1427569497',
    size: '45114',
    server: 'im1',
    random: '7660',
    hits: '2107',
    path: 'f/10/8fd9c0647a88d349a0b34295c7e41.jpg',
    link: 'https://im1.ibsearch.xxx/f/10/8fd9c0647a88d349a0b34295c7e41.jpg' } ]
```
