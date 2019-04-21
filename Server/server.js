/**********************************************
//	Program: server.js
//	Original programmer: Michael Lee Brummitt
//	Other Programers: David Marsh
*//////////////////////////////////////////////

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const express = require('express');
var mongojs = require('mongojs');
var fs = require('fs');
var songname = "error.mp3";  //error at first for testing purposes, should pull from database
// TODO: Fix this!
// sends error.mp3 the first time it gets a get request for a song
//
//
//basic database structure: 
//database: music
//collection: track
//
//collection contents example:
//_id:5cbbcb1abe935f01089c65a6
//filename:"song.mp3"

const app = express();

app.get('/', function(request, response) {  response.sendFile(__dirname + "/index.html");});  //index.html is a seperate file

app.listen(8080);

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
	
	//GET a song
	//songs should be in a folder audio/music in the server folder
	//use different folders for different stations
	//you can modify the get request, etc and use
	//different collections to accomidate for 
	//different stations
	app.get( '/song/', function(req, response)  {
		
		//set response type, etc
		response.set('content-type', 'audio/mp3');
		response.set('accept-ranges', 'bytes');
		
		try{
			db.db("music").collection("track").aggregate(
				[
					{
						$sample: {size: 1}
					}
				]
			).toArray(function(err, res) {
				 songname = (res[0].filename);
				 console.log(res[0].filename); //testing line, feel free to comment out if needed.
			});
		}
		catch(err){
			response.send("ERROR: " + err);
		}
		finally{
			response.write(fs.readFileSync("audio/music/" + songname, 'binary'), 'binary');
			response.end();
		}
		
	});
	
	
});