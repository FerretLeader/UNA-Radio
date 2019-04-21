var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const express = require('express');
var mongojs = require('mongojs');
var songname = "error.mp3";  //error at first for testing purposes, should pull from database
// TODO: Fix this!
// sends error.mp3 the first time it gets a get request for a song

const app = express();

app.get('/', function(request, response) {  response.sendfile(__dirname + "/index.html");});  //index.html is a seperate file

app.listen(8080);

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
	
	//GET a song
	app.get( '/song/', function(req, response)  {
		
		/*
		//set response type, etc
		response.set('content-type', 'audio/mp3');
		response.set('accept-ranges', 'bytes');
		*/
		
		try{
			db.db("music").collection("track").aggregate(
				[
					{
						$sample: {size: 1}
					}
				]
			).toArray(function(err, res) {
				 songname = (res[0].filename);
			});
		}
		catch(err){
			response.send("ERROR: " + err);
		}
		finally{
			response.send(songname);
		}
		
	});
	
	
});