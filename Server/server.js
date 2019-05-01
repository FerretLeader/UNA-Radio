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

const app = express();

app.get('/', function(request, response) {  response.sendFile(__dirname + "/index.html");});  //index.html is a seperate file

app.listen(8080);

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
	
	//GET a song
	//songs should be in a folder station/music in the server folder
	//use different folders for different stations
	//you can modify the get request, etc and use
	//different collections to accomodate for 
	//different stations
	app.get( '/station/', function(req, response)  {
		
		//set response type, etc
		response.set('content-type', 'audio/mp3');
		response.set('accept-ranges', 'bytes');
		
		try{
			db.db("music").collection("station").aggregate(
				[
					{
						$sample: {size: 1}
					}
				]
			).toArray(function(err, res) {
				try{
					response.write(fs.readFileSync("audio/station/" + res[0].filename, 'binary'), 'binary');
					console.log(res[0].filename); //testing line, feel free to comment out if needed.
				}
				catch(err){
					console.log(err);
					response.send("ERROR: " + err);
				}
				//response.end();
			});
		}
		catch(err){
			console.log(err);
			response.send("ERROR: " + err);
		}
	});
	
		app.get( '/art/:songname', function(req, response)  {
		
		try{
			db.db("music").collection("art").aggregate(
				[
					{
						$match: {songname: {$eq: (req.params.songname) }}
					},
					{
						$sample: {size: 1}
					}
				]
			).toArray(function(err, res) {
				try{
					response.write(fs.readFileSync("audio/art/" + res[0].filename, 'binary'), 'binary');
					console.log(res[0].songname); //testing line, feel free to comment out if needed.
				}
				catch(err){
					console.log(err);
					response.send("ERROR: " + err);
				}
				response.end();
			});
		}
		catch(err){
			console.log(err);
			response.send("ERROR: " + err);
		}
	});

	app.get( '/station1/', function(req, response)  {
		
		//set response type, etc
		response.set('content-type', 'audio/mp3');
		response.set('accept-ranges', 'bytes');
		
		try{
			db.db("music").collection("station1").aggregate(
				[
					{
						$sample: {size: 1}
					}
				]
			).toArray(function(err, res) {
				try{
					response.write(fs.readFileSync("audio/station1/" + res[0].filename, 'binary'), 'binary');
					console.log(res[0].filename); //testing line, feel free to comment out if needed.
				}
				catch(err){
					console.log(err);
					response.send("ERROR: " + err);
				}
				//response.end();
			});
		}
		catch(err){
			console.log(err);
			response.send("ERROR: " + err);
		}
	});
	
});