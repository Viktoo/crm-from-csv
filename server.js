const express = require('express');
const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");

const app = express();

CSVToJSON().fromFile("./csv/normal.csv").then(source => {
	console.log(source);
}); 

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);