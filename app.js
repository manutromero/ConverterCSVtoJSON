const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const app = express();

const csv = require('csvtojson');

const BarriosPathFile = './ArchivosOriginales/Barrios.csv';
const VentavsRentaPathFile = './ArchivosOriginales/VentaVSRenta.csv';

let BarriosData = 'Cargando..';
let VentavsRentaData = 'Cargando..';

csv({})
	.fromFile(BarriosPathFile)
	.then((jsonObj) => {
		BarriosData = jsonObj;
	});

csv({})
	.fromFile(VentavsRentaPathFile)
	.then((jsonObj) => {
		VentavsRentaData = jsonObj;
	});

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.get('/Barrios', (req, res) => {
	console.log(`URL: ${req.url}`);
	res.send(BarriosData);
});

app.get('/Ventavsrenta', (req, res) => {
	console.log(`URL: ${req.url}`);
	res.send(VentavsRentaData);
});

// Start the server
const server = app.listen(port, (error) => {
	if (error) return console.log(`Error: ${error}`);

	console.log(`Server listening on port ${server.address().port}`);
});
