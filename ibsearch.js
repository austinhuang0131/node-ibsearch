var request   = require('request'),
	Promise   = require('bluebird');

var ib = function(options){
	if (options !== undefined && options !== null) {
		this.access_token = options;
	}
};

ib.prototype.search = function(query, options) {
	var url = 'https://ibsearch.xxx/api/v1/images.json?';
	if (query !== undefined) {url += "q="+query+"&";}
	if (options !== undefined) {
		if (options.limit !== undefined) {
			if (isNaN(parseInt(options.limit))) {
				process.emitWarning("[IbSearch] options.limit in ib.search() should be a number, at least. Yours is NaN. OBJECTION! IbSearch will treat this as a 1.");
			}
			else if (parseInt(options.limit) > 100) {
				process.emitWarning("[IbSearch] options.limit in ib.search() should be less than 100. Yours is "+parseInt(options.limit)+". No more girls for you: IbSearch will cap this at 100. If you want more results, use \"options.page\"");
			}
			else if (parseInt(options.limit) === 0) {
				process.emitWarning("[IbSearch] What is wrong with you putting in a limit of 0??? Don't you like anime girls and wish to see them everyday... Anyways, IbSearch will treat this as a 1.");
			}
			url += "limit="+options.limit+"&";
		}
		if (options.page !== undefined) {
			if (isNaN(parseInt(options.page))) {
				process.emitWarning("[IbSearch] options.page in ib.search() should be a number, at least. Yours is NaN. OBJECTION! IbSearch will treat this as a 1.");
			}
			else if (parseInt(options.page) === 0) {
				process.emitWarning("[IbSearch] What is wrong with you putting in a page number of 0??? Are you slightly depressed? Anyways, IbSearch will treat this as a 1.");
			}
			url += "page="+options.page+"&";
		}
	}
	if (this.access_token !== null && this.access_token !== undefined) {
		url += "key="+this.access_token+"&";
	}
	return new Promise(function(resolve, reject) {
		request.get(url, function (err, res, body) {
			if(err) { return reject(err); }
			if(res.statusCode !== 200) { return reject(new Error('IbSearch returned status ' + res.statusCode)); }
			var data = JSON.parse(body),
				result = [];
			data.forEach(i => {
				i.link = "https://"+i.server+".ibsearch.xxx/"+i.path;
				result.push(i);
			});
			resolve(result);
		});
	});
};

module.exports = ib;
