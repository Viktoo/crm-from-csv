const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");
const JsonTable = require('ts-react-json-table');
const express = require('express');

const app = express();

app.get('/api/myJSON', (req, res) => {

  CSVToJSON().fromFile("./csv/advanced.csv").then(source => {
			
			var seenNames = {};

			source = source.filter(function(currentObject) {
		    if (currentObject.last_name in seenNames) {
		        return false;
		    } else {
		        seenNames[currentObject.last_name] = true;
		        return true;
		    }
		});
  		res.json(source);
	}); 
});

app.get('/api/dupes', (req, res) => {
	CSVToJSON().fromFile("./csv/advanced.csv").then(antisource => {

		var seenNames = {};

		antisource = antisource.filter(function(currentObject) {
		    if (currentObject.last_name in seenNames) {
		        return true;
		    } else {
		        seenNames[currentObject.last_name] = false;
		        return false;
		    }
		});
		res.json(antisource);
	});
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);