'use strict';
var chai = require('chai');
var should = chai.should();
var ibsearch = require('../ibsearch');


describe('IbSearch NodeJS', function(){
	var pixiv;
	before(function(){
		ib = new ibsearch();
 	});
	describe('search', function(){
		it('should not error', function(){
			return ib.search("lolita")
			.then(function(data) {
				data[0].link.should.include('https://');
				data[0].link.should.include('.ibsearch.xxx/');
				data.should.have.length(25);
			});
		});
	});
});

