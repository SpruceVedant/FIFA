var AccessToken = "" + Math.floor(Math.random() * 1000000000000000000);

var fs = require('fs');
var path = require('path');
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var currentPath = path.dirname(__filename);
var fullpath = path.join(currentPath, './../data', 'winners.json');

var winners = {};

// LoadFromJSON loads/resets the winners from
// the JSON file
function LoadFromJSON(fullpath) {
	// Load data from JSON into memory
	var jsonFile = fs.readFileSync(fullpath);
	winners = JSON.parse(jsonFile);
	// Finish loading JSON
}

// ListAllJSON returns all winners
function ListAllJSON() {
	return JSON.stringify(winners);
//
