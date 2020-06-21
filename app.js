const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const app = express();

const csv = require('csvtojson');

const csvFilePath = './ArchivosOriginales/DataTest.csv';

let data = 'Cargando..';
csv({})
	.fromFile(csvFilePath)
	.then((jsonObj) => {
		data = jsonObj;
	});

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.get('/Data', (req, res) => {
	console.log(`URL: ${req.url}`);
	res.send(data);
});

// Start the server
const server = app.listen(port, (error) => {
	if (error) return console.log(`Error: ${error}`);

	console.log(`Server listening on port ${server.address().port}`);
});
