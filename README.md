# IbSearch
```js
const ibsearch = require("ibsearch"),
      ib = ibsearch("api_key"); // API Key is optional but it gives you a higher rate

ib.search("lolita").then(function(data) {
    console.log(data[0].link); // SPECIAL!
    console.log(data); // Normal
}
```
For each object in `data`, it is everything described in the [API documentation](https://ibsearch.xxx/api/v1/images), **plus a `link` property** so you can just fetch your image link without hassle. Here's an example:

```json
[{
	"id": "838745",
	"rating": "s",
	"tags": "1boy 1girl 2girls 4koma bed blush chiaki_(wakabayashi) clock comic covering_mouth eye_contact eyes_closed flying_sweatdrops hetero iijima_kana kana_(wakabayashi) looking_at_another lying monochrome mother_and_son multiple_girls on_back open_door original sweat sweatdrop translated translation_request uchimura_chiaki uchimura_keiko under_covers wakabayashi_toshiya",
	"format": "jpg",
	"width": "400",
	"height": "1184",
	"area": "473600",
	"aspectw": "337",
	"aspecth": "2960",
	"sha1": "F82B27B5D730BB7067D9F0D725B52B0F7529E478",
	"md5": "2E345CBE21396AC73FF71BB215A15409",
	"found": "1428482882",
	"size": "250895",
	"server": "im1",
	"random": "18267",
	"hits": "13",
	"path": "2/e3/45cbe21396ac73ff71bb215a15409.jpg",
      "link": "https://im1.ibsearch.xxx/2/e3/45cbe21396ac73ff71bb215a15409.jpg"
}]
```

`.search()` is its only function.
