var MongoClient = require('mongodb').MongoClient;
var url = "";
const express = require('express');
var mongojs = require('mongojs');
const app = express();

app.get('/', function(request, response) {  response.sendfile(__dirname + "/index.html");});  //index.html is a seperate file

app.listen(8080);

