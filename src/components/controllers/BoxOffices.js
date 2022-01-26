import React from 'react';

function BoxOffices() {
	var https = require('follow-redirects').https;

	var fs = require('fs');
	var options = {
	'method': 'GET',
	'hostname': 'imdb-api.com',
	'port': 443,
	'path': '/en/API/BoxOffice/k_hiba3sak',
	'headers': {},
	'maxRedirects': 20
	};

	var req = https.request(options, function (res) {
		var chunks = [];
		res.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res.on("end", function (chunk) {
			var body = Buffer.concat(chunks);
			console.log(body.toString());
		});

		res.on("error", function (error) {
			console.error(error);
		});
	});

	req.end();

	var App = React.Component({
		render: function () {
			var filmIds = req.items.map(function (film) {
				return <div>{film.id}</div>;
			});
	
			return <div>{filmIds}</div>;
		}
	});

	return req;
} 
export default BoxOffices