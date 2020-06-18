const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
const app = express();

const csv = require('csvtojson');

const csvFilePath= './ArchivosOriginales/DataTest.csv'

let data = "Cargando..";
  csv({
  })
  .fromFile(csvFilePath)
  .then((jsonObj)=>{
    data = jsonObj
  })

  app.get('/Data', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send(data);
  });
  
  
  // Start the server
  const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
  
    console.log(`Server listening on port ${server.address().port}`);
  });