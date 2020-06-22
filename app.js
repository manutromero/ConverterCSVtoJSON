const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const app = express();
const csv = require('csvtojson');

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

function CreatePathWithFileFormatting(urlGet, urlExposed) {
	let data;
	csv({})
		.fromFile(urlGet)
		.then((jsonObj) => {
			data = jsonObj;
		});

	app.get(urlExposed, (req, res) => {
		console.log(`URL: ${req.url}`);
		res.send(data);
	});
}

CreatePathWithFileFormatting(
	'./ArchivosOriginales/BARRIOS_MAS_POPULARES.csv',
	'/Barrios'
);
CreatePathWithFileFormatting(
	'./ArchivosOriginales/CRECIMIENTO_SEGUIDORES_REDES.csv',
	'/CrecimientoRedes'
);
CreatePathWithFileFormatting(
	'./ArchivosOriginales/CRECIMIENTO_MENSUAL_REDES.csv',
	'/Redes'
);

// Start the server
const server = app.listen(port, (error) => {
	if (error) return console.log(`Error: ${error}`);
	console.log(`Server listening on port ${server.address().port}`);
});
