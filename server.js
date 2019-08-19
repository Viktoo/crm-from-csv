const express = require('express');
const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");

const app = express();

CSVToJSON().fromFile("./csv/normal.csv").then(source => {
	console.log(source);
}); 

app.get('/api/myJson', (req, res) => {
	CSVToJSON().fromFile("./csv/normal.csv").then(source => {
		//console.log(source);
		res.json(source);

	});
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);